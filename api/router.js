const router = require('express').Router();
const passport = require('passport');
const permission = require('permission');
const AuthController = require('./controllers/auth.controller');
const MeController = require('./controllers/me.controller');
const MetaSerializer = require('./serializers/meta.serializer');

router.get('/', (req, res) => {
  const status = 200;
  const serializedMessage = MetaSerializer.serialize({ status, message: 'API is running' });

  return res.status(status).json(serializedMessage);
});

router
  .get('/logout', AuthController.logOut)
  .post('/login', passport.authenticate('local-login'), AuthController.logIn)
  .post('/signup', passport.authenticate('local-signup'), AuthController.signUp);

// role required: none - user just needs to be logged in
router.route('/me')
  .get(permission(), MeController.index)
  .put(permission(), MeController.update);

module.exports = router;
