import { Elysia } from 'elysia';
// import { db, user } from '../db/init';

export function tea(app: Elysia) {
  return app.post('/', async ({ request }) => {
    let UUID = request.headers.get('uuid');
    if (!UUID) {
      UUID = 'UUID header is missing';
    }

    // // Fetch user data from the database
    // const users = await db
    //   .select({
    //     field1: user.uuid,
    //   })
    //   .from(user);

    const field1 = 'Uuid: eveeify';

    return `Test: ${UUID}, User Data: ${JSON.stringify(field1)}`;
  });
}
