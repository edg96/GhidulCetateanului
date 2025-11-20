import { MongoClient, Db } from 'mongodb';
import { ConfigService } from '@nestjs/config';

export const MONGO_CLIENT = 'MONGO_CLIENT';
export const MONGO_DB = 'MONGO_DB';

export const mongoProviders = [
  {
    provide: MONGO_CLIENT,
    useFactory: async (configService: ConfigService): Promise<MongoClient> => {
      const uri = configService.get<string>('MONGO_URI');
      if (!uri) {
        throw new Error('MONGO_URI is not defined');
      }

      const client = new MongoClient(uri);
      await client.connect();
      return client;
    },
    inject: [ConfigService],
  },
  {
    provide: MONGO_DB,
    useFactory: (client: MongoClient, configService: ConfigService): Db => {
      const dbName = configService.get<string>('MONGO_DB_NAME') ?? 'politics';
      return client.db(dbName);
    },
    inject: [MONGO_CLIENT, ConfigService],
  },
];
