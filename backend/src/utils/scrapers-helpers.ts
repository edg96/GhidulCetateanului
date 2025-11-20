import { Db } from 'mongodb';
import { Senator } from '../common/interfaces/senator.interface';
import { Deputy } from '../common/interfaces/deputy.interface';

export async function savePoliticiansToDB(
  db: Db,
  collectionName: string,
  politicians: Senator[] | Deputy[],
): Promise<void> {
  const collection = db.collection(collectionName);

  await collection.deleteMany({});
  if (politicians.length) {
    await collection.insertMany(politicians);
  }
}

export function summarizeByParty(
  politicians: Senator[] | Deputy[],
): Record<string, number> {
  const grouped = politicians.reduce<Record<string, number>>((acc, p) => {
    const key = p.shortParty ?? p.politicalParty ?? 'UNKNOWN';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(grouped)
    .sort((a, b) => a.localeCompare(b))
    .reduce<Record<string, number>>((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {});
}
