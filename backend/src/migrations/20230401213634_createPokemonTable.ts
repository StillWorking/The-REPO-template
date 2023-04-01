import { change } from 'rake-db';

change(async (db) => {
  await db.createTable('pokemon', (t) => ({
    id: t.identity().primaryKey(),
    name: t.text(),
    type: t.text(),
    subtype: t.text().nullable(),
    hp: t.integer(),
    attack: t.integer(),
    defense: t.integer(),
    sp_attack: t.integer(),
    sp_defense: t.integer(),
    speed: t.integer()
  }));
});
