import { boolean, bigint, text, pgTable } from 'drizzle-orm/pg-core';

export const premiumtable = pgTable('tableName', {
  uuid: text('uuid'),
  active: boolean('active'),
  ends: bigint('ends', { mode: 'number' }),
  name: text('name'),
  start: bigint('starts', { mode: 'number' }),
  success: boolean('success'),
});
