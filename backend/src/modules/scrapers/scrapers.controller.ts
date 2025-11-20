import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { DeputiesScraperService } from './services/deputies-scraper.service';
import { SenatorsScraperService } from './services/senators-scraper.service';
import { InstitutionsService } from './services/institutions.service';

@Controller()
export class ScrapersController {
  constructor(
    private readonly deputiesScraper: DeputiesScraperService,
    private readonly senatorsScraper: SenatorsScraperService,
    private readonly institutionsService: InstitutionsService,
  ) {}

  @Get('api/deputies')
  async getDeputies() {
    try {
      return await this.deputiesScraper.scrapAndSaveDeputies();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Failed to scrape deputies';

      throw new HttpException(
        { error: message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('api/senators')
  async getSenators() {
    try {
      return await this.senatorsScraper.scrapAndSaveSenators();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Failed to scrape senators';

      throw new HttpException(
        { error: message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('api/institutions')
  getInstitutions() {
    return this.institutionsService.getInstitutions();
  }

  @Get('api/institutions/sync')
  async syncInstitutions() {
    return this.institutionsService.syncInstitutions();
  }

  @Get('api/institutions/categories')
  getCategories() {
    return this.institutionsService.provideCategories();
  }
}
