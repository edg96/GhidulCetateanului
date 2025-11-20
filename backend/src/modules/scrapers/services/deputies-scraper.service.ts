import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { Db } from 'mongodb';
import { Inject } from '@nestjs/common';
import { MONGO_DB } from '../../../database/mongo.provider';
import { Deputy } from '../../../common/interfaces/deputy.interface';
import { removeRomanianDiacritics } from '../../../utils/formatter';
import {
  savePoliticiansToDB,
  summarizeByParty,
} from '../../../utils/scrapers-helpers';

const BASE_URL = 'https://www.cdep.ro';
const DEPUTIES_URL = 'https://www.cdep.ro/pls/parlam/structura.de?par=1&idl=1';

@Injectable()
export class DeputiesScraperService {
  constructor(@Inject(MONGO_DB) private readonly db: Db) {}

  private async scrapeDeputies(): Promise<Deputy[]> {
    const deputies: Deputy[] = [];
    const response = await fetch(DEPUTIES_URL);
    const arrayBuffer = await response.arrayBuffer();
    const decoder = new TextDecoder('iso-8859-2');
    const data = decoder.decode(arrayBuffer);

    const $ = cheerio.load(data);

    const firstRightBlock = $('p[align="right"]').has('table').eq(0);

    firstRightBlock.find('tr[valign="top"]').each((_, el) => {
      const tds = $(el).find('td');
      if (tds.length < 4) return;

      const aTag = $(tds[1]).find('a');
      const name = removeRomanianDiacritics(aTag.text().trim());

      if (name === '') return;

      const href = aTag.attr('href') || '';
      const profilePage = href.startsWith('http') ? href : BASE_URL + href;
      const county = removeRomanianDiacritics($(tds[3]).text().trim());
      const shortParty =
        removeRomanianDiacritics($(tds[4]).text().trim()) || 'Minoritati';

      deputies.push({
        fullName: name,
        shortParty,
        county,
        profilePage,
        politicalParty: shortParty,
        chamber: 'deputy',
      });
    });

    return deputies;
  }

  async scrapAndSaveDeputies() {
    const deputies = await this.scrapeDeputies();
    const grouped = summarizeByParty(deputies);

    await savePoliticiansToDB(this.db, 'deputies', deputies);

    return grouped;
  }
}
