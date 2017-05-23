const supertest = require('supertest');
const app = require('../api');
const UserModel = require('../api/models/user.model');
const TestUtils = require('./utils/test-utils');
const api = supertest(app);
const ENDPOINT = '/api/login';

describe('Login (local)', () => {

  describe(`POST ${ENDPOINT}`, () => {
    describe('checking payload', () => {
      const role = UserModel.validRoles()[0];

      it('should return 999 when only email sent', (done) => {
        TestUtils.user.create(api, role).then(
          (auth) => {
            const email = auth.email;

            api.post(ENDPOINT)
              .send({ email })
              .expect(999, TestUtils.finishTest(done));
          }
        );
      });
      it('should return 400 when only password sent', (done) => {
        TestUtils.user.create(api, role).then(
          (auth) => {
            const password = auth.password;
            api.post(ENDPOINT)
              .send({ password })
              .expect(400, TestUtils.finishTest(done));
          }
        );
      });
      it('should return 400 when email and empty password sent', (done) => {
        TestUtils.user.create(api, role).then(
          (auth) => {
            const email = auth.email;
            const password = '';
            api.post(ENDPOINT)
              .send({ email, password })
              .expect(400, TestUtils.finishTest(done));
          }
        );
      });
      it('should return 401 when email and invalid password sent', (done) => {
        TestUtils.user.create(api, role).then(
          (auth) => {
            const email = auth.email;
            const invalidPassword = auth.password + '-invalid';
            const password = invalidPassword;
            api.post(ENDPOINT)
              .send({ email, password })
              .expect(401, TestUtils.finishTest(done));
          }
        );
      });
      it('should return 200 when email and valid password sent', (done) => {
        TestUtils.user.create(api, role).then(
          (auth) => {
            const email = auth.email;
            const password = auth.password;
            api.post(ENDPOINT)
              .send({ email, password })
              .expect(200, TestUtils.finishTest(done));
          }
        );
      });
    });
  });

  describe(`PUT ${ENDPOINT}`, () => {
    it('should return 404', (done) => {
      api.put(ENDPOINT).expect(404, TestUtils.finishTest(done));
    });
  });

  describe(`GET ${ENDPOINT}`, () => {
    it('should return 404', (done) => {
      api.get(ENDPOINT).expect(404, TestUtils.finishTest(done));
    });
  });

  describe(`DELETE ${ENDPOINT}`, () => {
    it('should return 404', (done) => {
      api.delete(ENDPOINT).expect(404, TestUtils.finishTest(done));
    });
  });

});
