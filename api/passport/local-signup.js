const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user.model');
const passport = require('passport');

passport.use(
  'local-signup',
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  (req, email, password, done) => {
    const passwordConfirmation = req.body.passwordConfirmation;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const role = req.body.role;

    process.nextTick(() => {
      const newUser = new UserModel();

      if (!email) {
        console.warn('local-signup: no email address provided');
        return done(null, false, 400);
      }
      if (!password) {
        console.warn('local-signup: no password provided');
        return done(null, false, 400);
      }
      if (!passwordConfirmation) {
        console.warn('local-signup: no password confirmation provided');
        return done(null, false, 400);
      }
      if (password !== passwordConfirmation) {
        console.warn('local-signup: password and confirmation do not match');
        return done(null, false, 400);
      }
      if (!role) {
        console.warn('local-signup: no role provided');
        return done(null, false, 400);
      }
      if (!UserModel.isRoleValid(role)) {
        console.warn(`local-signup: invalid role provided: "${role}"`);
        return done(null, false, 400);
      }
      email = email.toLowerCase();
      UserModel.findOne({ 'local.email': email }).then(
        (successResponse) => {
          if (successResponse) {
            const status = 409;
            const message = `local-signup: user already exists with email address "${email}"`;
            const errorResponse = {};
            console.warn(`${message}; errorResponse:`, errorResponse);
            done(null, false, status);
            throw message;
          }
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.local.firstName = firstName;
          newUser.local.lastName = lastName;
          newUser.role = role;

          return newUser.save();
        },
        (errorResponse) => {
          const status = 400;
          const message = `local-signup: Error finding user with email address "${email}"`;
          console.warn(`${message}; errorResponse:`, errorResponse);
          done(null, false, status);
          throw message;
        }
      ).then(
        (successResponse) => {
          console.info(`local-signup: saved new user with email address "${email}" and role "${role}"`);

          return successResponse;
        },
        (errorResponse) => {
          const status = 500;
          const message = `local-signup: could not save newUser with email address "${email}"`;
          console.warn(`${message}; errorResponse:`, errorResponse);
          done(null, false, status);
          throw message;
        }
      ).catch(
        (errorResponse) => {
          console.error(`caught error:`, errorResponse);
        }
      );

    });

  })
);
