const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user.model');
const passport = require('passport');

passport.use(
  'local-login',
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, done) => {
    if (email) {
      // Use lower-case e-mails to avoid case-sensitive e-mail matching
      email = email.toLowerCase();
    }
    process.nextTick(() => {
      UserModel.findOne({ 'local.email': email }, (err, user) => {
        if (err) {
          console.error(`local-login: error finding user with email address "${email}": err:`, err);
          return done(err);
        }
        if (!user) {
          console.warn(`local-login: unknown email address: ${email}`);
          // Normally would return 404, but returning 401 reveals less information
          return done(null, false, 401);
        }
        if (!user.isPasswordValid(password)) {
          console.warn('local-login: incorrect password entered');
          return done(null, false, 401);
        }
        console.info(`local-login: user found with email address "${email}" and role "${user.role}"`);

        return done(null, user, 200);
      });
    });

  })
);
