import { Elysia } from 'elysia';
import { tea } from './routes';

export const app = new Elysia();

app
  .get('/', ({ set }) => {
    set.redirect = 'https://teaclient.net/docs/api/intro/';
  })
  .post(
    '/',
    () => 'Wellcome to TeaClient API If you need help check out the docs',
  )
  .group('/premium', tea)
  .listen(6097);

console.log(
  `☕️ TeaClient API Is running at ${app.server?.hostname}:${app.server?.port}`,
); //* consoles server online
