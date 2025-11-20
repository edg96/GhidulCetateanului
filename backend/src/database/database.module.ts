import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mongoProviders } from './mongo.provider';

@Module({
  imports: [ConfigModule],
  providers: [...mongoProviders],
  exports: [...mongoProviders],
})
export class DatabaseModule {}
