import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { MONGO_DB } from '../../../database/mongo.provider';
import { Institution } from '../../../common/interfaces/institution.interface';
import { institutionsList } from '../../../database/institutions-list';

@Injectable()
export class InstitutionsService {
  constructor(@Inject(MONGO_DB) private readonly db: Db) {}

  async getInstitutions(): Promise<Institution[]> {
    const collection = this.db.collection<Institution>('institutions');
    return collection.find({}).toArray();
  }

  async syncInstitutions(): Promise<void> {
    const collection = this.db.collection<Institution>('institutions');

    await collection.deleteMany({});

    for (const inst of institutionsList) {
      await collection.updateOne(
        { name: inst.name },
        { $set: inst },
        { upsert: true },
      );
    }

    console.log('Institutions synchronized successfully.');
  }

  async provideCategories(): Promise<string[]> {
    const collection = this.db.collection<Institution>('institutions');
    const categories = collection.distinct('category');

    return categories;
  }
}
