import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })
dotenv.config({ path: '.env' })

const env = z
  .object({
    PORT: z.number().default(3000),
    NODE_ENV: z
      .literal('development')
      .or(z.literal('production'))
      .or(z.literal('test'))
      .default('development'),
    DATABASE_URL: z.string(),
    // DATABASE_URL_TEST is optional because production may not have it
    DATABASE_URL_TEST: z.string().optional(),
  })
  .parse(process.env)

export const config = {
  ...env,
  currentDatabaseUrl:
    env.NODE_ENV === 'test' ? env.DATABASE_URL_TEST : env.DATABASE_URL,
}
