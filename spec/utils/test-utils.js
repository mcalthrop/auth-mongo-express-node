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
  },
  logIn: (api, auth) => {
    const email = auth.email;
    const password = auth.password;

    return api.post(`/api/login`)
      .send({ email, password })
      .then(
        (response) => {
          if (response.status !== 200) {
            throw new Error(`Could not log in with user: "${email}"/"${password}"; ${response.error}`);
          }
          return { auth, response };
        }
      );
  },
  createAndLogIn: (api, role) => {
    return user.create(api, role).then(
      (auth) => user.logIn(api, auth)
    );
  },
  logOut: (api) => {
    return api.get(`/api/logout`);
  }
};

// Get the cookies from a response object.
// The `set-cookie` property of the `response.headers` object will look like this:
// 'set-cookie': [ 'connect.sid=s%3AlLH3J9BjE00N78EswHMI4iKcdgErP9ii.wrHeEABHI8BtYSL%2Fb17Rnw2H76NFe1bPSoax%2BTBnCvw; Path=/; HttpOnly' ]
// So we return that array.
function responseCookies(response) {
  return response.headers['set-cookie'];
}

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
  static get random() {
    return random;
  }
  static get user() {
    return user;
  }
  static get responseCookies() {
    return responseCookies;
  }
  static get finishTest() {
    return finishTest;
  }
}

module.exports = TestUtils;
