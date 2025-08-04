import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';

export function initDatabase(): NodePgDatabase {
    const db = drizzle(process.env.DATABASE_URL ?? 'postgres');
    return db;
}