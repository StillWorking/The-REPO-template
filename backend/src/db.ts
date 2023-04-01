import { orchidORM } from 'orchid-orm';
import { config } from './config';
import { PokemonTable } from './database/tableModels/pokemon.table';

export const db = orchidORM(
  {
    databaseURL: config.currentDatabaseUrl,
    log: true,
  },
  {
    pokemon: PokemonTable,
    // tables will be listed here
  }
);
