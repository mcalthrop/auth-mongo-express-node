const supertest = require('supertest');
const app = require('../api');
const Utils = require('../api/utils');
const TestUtils = require('./utils/test-utils');
const api = supertest(app);
const ENDPOINT = '/api/me';

describe('Me', () => {

  describe(`GET ${ENDPOINT}`, () => {
    describe('when not logged in', () => {
      it('should return 401', (done) => {
        api.get(ENDPOINT)
          .expect(401, TestUtils.finishTest(done));
      });
    });

    describe('when logged in', () => {
      it('should return 200 and correct data', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response, auth }) => {
            this.auth = auth;
            return api.get(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .expect(200);
          }
        ).then(
          (successResponse) => {
            const me = successResponse.body.data.attributes;

            expect(me.role).toBe(this.auth.role);
            expect(me.local.email).toBe(this.auth.email);
            expect(me.local.firstName).toBe(this.auth.firstName);
            expect(me.local.lastName).toBe(this.auth.lastName);
            done();
          }
        );
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

    describe('when logged in', () => {
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

  });

  describe(`PUT ${ENDPOINT}`, () => {

    describe('when not logged in', () => {
      it('should return 401', (done) => {
        api.put(ENDPOINT)
          .expect(401, TestUtils.finishTest(done));
      });
    });

    describe('when logged in', () => {
      it('should return 400 when no data provided', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response }) => {
            api.put(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .send()
              .expect(400, TestUtils.finishTest(done));
          }
        );
      });
      it('should return 204 when only email provided', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response, auth }) => {
            const data = Utils.duplicateObject(auth);
            data.email += '.mod';
            delete data.password;
            delete data.firstName;
            delete data.lastName;
            api.put(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .send(data)
              .expect(204, TestUtils.finishTest(done));
          }
        );
      });
      it('should return 204 when only firstName provided', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response, auth }) => {
            const data = Utils.duplicateObject(auth);
            data.firstName += '.mod';
            delete data.password;
            delete data.email;
            delete data.lastName;
            api.put(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .send(data)
              .expect(204, TestUtils.finishTest(done));
          }
        );
      });
      it('should return 204 when only lastName provided', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response, auth }) => {
            const data = Utils.duplicateObject(auth);
            data.lastName += '.mod';
            delete data.password;
            delete data.email;
            delete data.firstName;
            api.put(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .send(data)
              .expect(204, TestUtils.finishTest(done));
          }
        );
      });
      it('should return 204 when all data provided', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response, auth }) => {
            const data = Utils.duplicateObject(auth);
            data.email += '.mod';
            data.password += '.mod';
            data.firstName += '.mod';
            data.lastName += '.mod';
            api.put(ENDPOINT)
              .set('Cookie', TestUtils.responseCookies(response))
              .set('Accept', 'application/json')
              .send(data)
              .expect(204, TestUtils.finishTest(done));
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

    describe('when logged in', () => {
      it('should return 404', (done) => {
        TestUtils.user.createAndLogIn(api, 'standard').then(
          ({ response }) => {
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
