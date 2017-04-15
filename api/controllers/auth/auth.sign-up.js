const UserSerializer = require('../../serializers/user.serializer');

/**
 * @api {post} /api/signup POST /api/signup
 *
 * @apiParam {String} email User's email address - must be unique
 * @apiParam {String} [firstName] User's first name
 * @apiParam {String} [lastName] User's last name
 * @apiParam {String} password User's password
 * @apiParam {String} passwordConfirmation Must match the `password` parameter
 */
function authSignUp(req, res) {
  const user = req.user.toJSON();
  const serializedUser = UserSerializer.serialize(user);

  return res.status(201).json(serializedUser);
}

module.exports = authSignUp;
