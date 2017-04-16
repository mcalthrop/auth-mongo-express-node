const supertest = require('supertest');
const app = require('../api');
const TestUtils = require('./utils/test-utils');
const api = supertest(app);
const ENDPOINT = '/api/logout';

describe('Logout (local)', () => {
  describe(`GET ${ENDPOINT}`, () => {
    it('should return 200', (done) => {
      api.get(ENDPOINT)
        .expect(200, TestUtils.finishTest(done));
    });
    it('should return correct data', (done) => {
      api.get(ENDPOINT).then(
        (successResponse) => {
          expect(successResponse.body.meta.status).toBe(200);
          expect(successResponse.body.meta.message).toBe('Successfully logged out');
          done();
        }
      );
    });
  });

  describe(`POST ${ENDPOINT}`, () => {
    it('should return 404', (done) => {
      api.post(ENDPOINT)
        .expect(404, TestUtils.finishTest(done));
    });
  });

  describe(`PUT ${ENDPOINT}`, () => {
    it('should return 404', (done) => {
      api.put(ENDPOINT)
        .expect(404, TestUtils.finishTest(done));
    });
  });

  describe(`DELETE ${ENDPOINT}`, () => {
    it('should return 404', (done) => {
      api.delete(ENDPOINT)
        .expect(404, TestUtils.finishTest(done));
    });
  });

});
