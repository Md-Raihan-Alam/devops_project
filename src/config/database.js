import 'dotenv/config';
import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

let sql;
let db;

if (process.env.NODE_ENV === 'test') {
  // Do NOT connect to DB during tests
  sql = null;
  db = null;
} else {
  if (process.env.NODE_ENV === 'production') {
    neonConfig.fetchEndpoint = 'http://neon-local:5432/sql';
    neonConfig.useSecureWebSocket = false;
    neonConfig.poolQueryViaFetch = true;
  }

  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is missing');
  }

  sql = neon(process.env.DATABASE_URL);
  db = drizzle(sql);
}

export { db, sql };
