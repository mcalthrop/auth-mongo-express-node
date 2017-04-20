const random = {
  email: () => `test${Math.random()}@example.com`,
  password: () => `${Math.random()}`,
  firstName: () => `First${Math.random()}`,
  lastName: () => `Last${Math.random()}`
};

const user = {
  create: (api, role) => {
    const email = random.email();
    const password = random.password();
    const passwordConfirmation = password;
    const firstName = random.firstName();
    const lastName = random.lastName();

    return api.post(`/api/signup`)
      .send({ email, password, passwordConfirmation, role, firstName, lastName })
      .then(
        (response) => {
          if (response.status !== 201) {
            throw new Error(`Could not create user: "${email}"/"${password}"/"${passwordConfirmation}"/"${role}"/"${firstName}"/"${lastName}"; ${response.error}`);
          }
          return { email, password, role, firstName, lastName };
        },
        (error) => {
          throw new Error(`Could not create user: "${email}"/"${password}"/"${passwordConfirmation}"/"${role}"/"${firstName}"/"${lastName}"; ${error}`);
        }
      );
  }
};

// Utility function to make Jasmine play nicely with supertest.
// See: https://github.com/jasmine/jasmine-npm/issues/31#issuecomment-125953251
function finishTest(done) {
  return (err) => {
    if (err) {
      done.fail(err);
    } else {
      done();
    }
  };
}

class TestUtils {
  static get user() {
    return user;
  }
  static get finishTest() {
    return finishTest;
  }
}

module.exports = TestUtils;
