const UserSerializer = require('../../serializers/user.serializer');

/**
 * @api {post} /api/login POST /api/login
 *
 * @apiParam {String} email User's email address - must be unique
 * @apiParam {String} password User's password
 */
function authLogIn(req, res) {
  const user = req.user.toJSON();
  const serializedUser = UserSerializer.serialize(user);

  return res.status(200).send(serializedUser);
}

module.exports = authLogIn;
