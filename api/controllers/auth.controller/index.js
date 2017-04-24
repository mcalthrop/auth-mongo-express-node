const authLogIn = require('./auth.log-in');
const authSignUp = require('./auth.sign-up');
const authLogOut = require('./auth.log-out');

module.exports = {
  logIn: authLogIn,
  signUp: authSignUp,
  logOut: authLogOut
};
