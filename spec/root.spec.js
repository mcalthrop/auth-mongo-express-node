const supertest = require('supertest');
const app = require('../api');
const api = supertest(app);
const ENDPOINT = '/api';

describe('API root', () => {
  describe(`GET ${ENDPOINT}`, () => {
    it('should return 200', (done) => {
      api.get(ENDPOINT).expect(200);
      done();
    });
    it('should return correct data', (done) => {
      api.get(ENDPOINT).then(
        (successResponse) => {
          expect(successResponse.body.meta.status).toBe(200);
          expect(successResponse.body.meta.message).toBe('API is running');
          done();
        }
      );
    });
  });
});
