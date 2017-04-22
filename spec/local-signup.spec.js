const supertest = require('supertest');
const app = require('../api');
const UserModel = require('../api/models/user.model');
const TestUtils = require('./utils/test-utils');
const api = supertest(app);
const ENDPOINT = '/api/signup';

describe('Signup (local)', () => {

  describe(`POST ${ENDPOINT}`, () => {
    describe('checking payload', () => {
      beforeEach(() => {
        this.email = TestUtils.random.email();
        this.password = TestUtils.random.password();
        this.passwordConfirmation = this.password;
        this.role = UserModel.validRoles()[0];
        this.firstName = TestUtils.random.firstName();
        this.lastName = TestUtils.random.lastName();
      });

      it('should return 400 when only email sent', (done) => {
        const email = this.email;
        api.post(ENDPOINT)
          .send({ email })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 400 when only password sent', (done) => {
        const password = this.password;
        api.post(ENDPOINT)
          .send({ password })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 400 when only passwordConfirmation sent', (done) => {
        const passwordConfirmation = this.passwordConfirmation;
        api.post(ENDPOINT)
          .send({ passwordConfirmation })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 400 when only role sent', (done) => {
        const role = this.role;
        api.post(ENDPOINT)
          .send({ role })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 400 when only email and password sent', (done) => {
        const email = this.email;
        const password = this.password;
        api.post(ENDPOINT)
          .send({ email, password })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 400 when only email and passwordConfirmation sent', (done) => {
        const email = this.email;
        const passwordConfirmation = this.passwordConfirmation;
        api.post(ENDPOINT)
          .send({ email, passwordConfirmation })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 400 when only password and passwordConfirmation sent', (done) => {
        const password = this.password;
        const passwordConfirmation = this.passwordConfirmation;
        api.post(ENDPOINT)
          .send({ password, passwordConfirmation })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 400 when email, password and non-matching passwordConfirmation sent', (done) => {
        const email = this.email;
        const password = this.password;
        const passwordConfirmation = this.passwordConfirmation + '-non-matching';
        api.post(ENDPOINT)
          .send({ email, password, passwordConfirmation })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 400 when only email, password and matching passwordConfirmation sent', (done) => {
        const email = this.email;
        const password = this.password;
        const passwordConfirmation = this.passwordConfirmation;
        api.post(ENDPOINT)
          .send({ email, password, passwordConfirmation })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 400 when email, password, matching passwordConfirmation and invalid role sent', (done) => {
        const email = this.email;
        const password = this.password;
        const passwordConfirmation = this.passwordConfirmation;
        const role = this.role + '-invalid';
        api.post(ENDPOINT)
          .send({ email, password, passwordConfirmation, role })
          .expect(400, TestUtils.finishTest(done));
      });
      it('should return 201 when email, password, matching passwordConfirmation and valid role sent', (done) => {
        const email = this.email;
        const password = this.password;
        const passwordConfirmation = this.passwordConfirmation;
        const role = this.role;
        api.post(ENDPOINT)
          .send({ email, password, passwordConfirmation, role })
          .expect(201, TestUtils.finishTest(done));
      });
      it('should return 201 when email, password, matching passwordConfirmation, valid role, first and last name sent', (done) => {
        const email = this.email;
        const password = this.password;
        const passwordConfirmation = this.passwordConfirmation;
        const role = this.role;
        const firstName = this.firstName;
        const lastName = this.lastName;
        api.post(ENDPOINT)
          .send({ email, password, passwordConfirmation, role, firstName, lastName })
          .expect(201, TestUtils.finishTest(done));
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
