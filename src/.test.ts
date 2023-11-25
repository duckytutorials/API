import { describe, expect, it, fetch } from 'bun';


describe('Elysia', () => {
  it('Server Working', async () => {
    const originalFetch = global.fetch;
    global.fetch = () => Promise.resolve(new Response('TeaClient', { status: 200 }));

    const response = await fetch('http://localhost:3000', { method: 'POST' })
      .then((res) => res.text());

    expect(response).toContain('TeaClient');

    global.fetch = originalFetch;
  });
});