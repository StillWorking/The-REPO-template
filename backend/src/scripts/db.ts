// src/scripts/db.ts
import path from 'path'
import { rakeDb } from 'rake-db'
import { config } from '../config'
import { appCodeUpdater } from 'orchid-orm'

const options = [{ databaseURL: config.DATABASE_URL }]

// when running in production we don't need to test the database
if (config.NODE_ENV !== 'production') {
  const url = config.DATABASE_URL_TEST
  if (!url) {
    throw new Error('DATABASE_URL_TEST env variable is missing')
  }
  options.push({ databaseURL: url })
}

// pass options and migrationPath to `rakeDb`
rakeDb(options, {
  migrationsPath: '../migrations',
  appCodeUpdater: appCodeUpdater({
    tablePath: (tableName) => `../app/tables/${tableName}.table.ts`,
    baseTablePath: '../lib/BaseTable.ts',
    mainFilePath: '../db.ts',
  }),
  commands: {
    async seed(options) {
      const { seed } = await import('../database/seeds/seed')
      await seed()
    },
  },
})
