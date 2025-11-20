import { Module } from '@nestjs/common';
import { ScrapersController } from './scrapers.controller';
import { DeputiesScraperService } from './services/deputies-scraper.service';
import { SenatorsScraperService } from './services/senators-scraper.service';
import { InstitutionsService } from './services/institutions.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ScrapersController],
  providers: [
    DeputiesScraperService,
    SenatorsScraperService,
    InstitutionsService,
  ],
})
export class ScrapersModule {}
