import { BaseTable } from '../../lib/BaseTable';
import { tableToZod } from 'orchid-orm-schema-to-zod';

export class PokemonTable extends BaseTable {
  readonly table = 'pokemon';
  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    name: t.text(),
    type: t.text(),
    subtype: t.text().nullable(),
    hp: t.integer(),
    attack: t.integer(),
    defense: t.integer(),
    sp_attack: t.integer(),
    sp_defense: t.integer(),
    speed: t.integer(),
  }));
}

export const pokemonSchema = tableToZod(PokemonTable)