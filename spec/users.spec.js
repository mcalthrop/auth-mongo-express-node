const supertest = require('supertest');
const app = require('../api');
const TestUtils = require('./utils/test-utils');
const api = supertest(app);
const ENDPOINT = '/api/users';

describe('Users', () => {

  describe(`GET ${ENDPOINT}`, () => {
    describe('when not logged in', () => {
      it('should return 401', (done) => {
        api.get(ENDPOINT)
          .expect(401, TestUtils.finishTest(done));
      });
    });

    describe('when logged in as user with "standard" role', () => {
      it('should return 403', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response, auth }) => {
            this.auth = auth;
            api.get(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .expect(403, TestUtils.finishTest(done));
          }
        );
      });
    });

    describe('when logged in as user with "admin" role', () => {
      it('should return 200 and correct data', (done) => {
        TestUtils.user.createAndLogIn(api, 'admin').then(
          ({ response, auth }) => {
            this.auth = auth;
            return api.get(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .expect(200);
          }
        ).then(
          (successResponse) => {
            const users = successResponse.body.data;

            expect(users.length).toBeGreaterThan(0);
          }
        ).then(TestUtils.finishTest(done));
      });
    });

  });

  describe(`POST ${ENDPOINT}`, () => {

    describe('when not logged in', () => {
      it('should return 404', (done) => {
        api.post(ENDPOINT)
          .expect(404, TestUtils.finishTest(done));
      });
    });

    describe('when logged in as user with "standard" role', () => {
      it('should return 404', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response, auth }) => {
            this.auth = auth;
            api.post(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .expect(404, TestUtils.finishTest(done));
          }
        );
      });
    });

    describe('when logged in as user with "admin" role', () => {
      it('should return 404', (done) => {
        TestUtils.user.createAndLogIn(api, 'admin').then(
          ({ response, auth }) => {
            this.auth = auth;
            api.post(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .expect(404, TestUtils.finishTest(done));
          }
        );
      });
    });

  });

  describe(`PUT ${ENDPOINT}`, () => {

    describe('when not logged in', () => {
      it('should return 404', (done) => {
        api.put(ENDPOINT)
          .expect(404, TestUtils.finishTest(done));
      });
    });

    describe('when logged in as user with "standard" role', () => {
      it('should return 404', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response, auth }) => {
            this.auth = auth;
            api.put(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .expect(404, TestUtils.finishTest(done));
          }
        );
      });
    });

    describe('when logged in as user with "admin" role', () => {
      it('should return 404', (done) => {
        TestUtils.user.createAndLogIn(api, 'admin').then(
          ({ response, auth }) => {
            this.auth = auth;
            api.put(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .expect(404, TestUtils.finishTest(done));
          }
        );
      });
    });

  });

  describe(`DELETE ${ENDPOINT}`, () => {

    describe('when not logged in', () => {
      it('should return 404', (done) => {
        api.delete(ENDPOINT)
          .expect(404, TestUtils.finishTest(done));
      });
    });

    describe('when logged in as user with "standard" role', () => {
      it('should return 404', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response, auth }) => {
            this.auth = auth;
            api.delete(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .expect(404, TestUtils.finishTest(done));
          }
        );
      });
    });

    describe('when logged in as user with "admin" role', () => {
      it('should return 404', (done) => {
        TestUtils.user.createAndLogIn(api, 'admin').then(
          ({ response, auth }) => {
            this.auth = auth;
            api.delete(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .expect(404, TestUtils.finishTest(done));
          }
        );
      });
    });

  });

});
