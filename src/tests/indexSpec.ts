import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Testing endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const responses = await request.get('/');
    expect(responses.status).toBe(200);
  });
});
