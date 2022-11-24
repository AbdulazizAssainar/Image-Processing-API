const app = require("../..");
const supertest = require("supertest");

const request = supertest(app);

describe('Testing endpoint responses', () => {
  it('gets the main endpoint', async () => {
    const responses = await request.get('/');
    expect(responses.status).toBeCloseTo(302);
  });
  it('gets the api endpoint', async () => {
    const responses = await request.get('/api');
    expect(responses.status).toBe(200);
  });
});
