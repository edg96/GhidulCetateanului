import { Injectable, Inject } from '@nestjs/common';
import * as cheerio from 'cheerio';
import puppeteer, { Browser } from 'puppeteer';
import { Db } from 'mongodb';
import { MONGO_DB } from '../../../database/mongo.provider';
import {
  summarizeByParty,
  savePoliticiansToDB,
} from '../../../utils/scrapers-helpers';
import { Senator } from '../../../common/interfaces/senator.interface';

const BASE_URL = 'https://www.senat.ro';
const SENAT_URL = 'https://www.senat.ro/FisaSenatori.aspx';

const PARTY_MAP: Record<string, string> = {
  'Grupul parlamentar al Partidului Social Democrat': 'PSD',
  'Grupul parlamentar Alianța pentru Unirea Românilor': 'AUR',
  'Grupul parlamentar al Partidului Naţional Liberal': 'PNL',
  'Grupul parlamentar al Uniunii Salvați România': 'USR',
  'Grupul parlamentar PACE – Întâi România': 'PACE',
  'Grupul parlamentar al Uniunii Democrate Maghiare din România': 'UDMR',
  'Senatori neafiliați': 'Neafiliati',
};

@Injectable()
export class SenatorsScraperService {
  constructor(@Inject(MONGO_DB) private readonly db: Db) {}

  private async launchBrowser(): Promise<Browser> {
    return puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }

  private async scrapeSenators(): Promise<Senator[]> {
    const browser = await this.launchBrowser();
    const page = await browser.newPage();

    await page.goto(SENAT_URL, { waitUntil: 'domcontentloaded' });

    await page.waitForSelector('.nav.nav-tabs', { timeout: 30000 });

    await page.evaluate(() => {
      const tabs = Array.from(
        document.querySelectorAll<HTMLAnchorElement>('a'),
      );
      const allTab = tabs.find((a) => a.textContent?.trim().includes('Toți'));
      allTab?.click();
    });

    await page.waitForFunction(
      () => document.querySelectorAll('.col-md-6.col-lg-4').length > 100,
      { timeout: 20000 },
    );

    const html = await page.content();
    await browser.close();

    const $ = cheerio.load(html);
    const senators: Senator[] = [];

    $('.col-md-6.col-lg-4').each((_, el) => {
      const aTag = $(el).find('a');
      const pTags = $(el).find('p');

      if (pTags.length < 3) return;

      const profilePage = BASE_URL + aTag.attr('href');
      const fullName = aTag.text().trim();
      const dateOfBirth = $(pTags[0]).text().trim();
      const county = $(pTags[1]).text().trim();
      const politicalParty = $(pTags[2]).text().trim();
      const shortParty = PARTY_MAP[politicalParty] || 'UNKNOWN';

      if (shortParty === 'UNKNOWN') return;

      senators.push({
        fullName,
        profilePage,
        dateOfBirth,
        county,
        politicalParty,
        shortParty,
        chamber: 'senator',
      });
    });

    return senators;
  }

  async scrapAndSaveSenators() {
    const senators = await this.scrapeSenators();
    const grouped = summarizeByParty(senators);

    await savePoliticiansToDB(this.db, 'senators', senators);

    return grouped;
  }
}
