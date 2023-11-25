import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
 


 
// for query purposes
const client = postgres(`${process.env.connectionUrl}`);
const db = drizzle(client, { schema });

