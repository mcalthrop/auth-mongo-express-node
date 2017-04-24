const UserSerializer = require('../../serializers/user.serializer');

/**
 * @api {post} /api/login POST /api/login
 * @apiDescription Provide facility to log in to the site
 *
 * @apiName Login
 * @apiGroup Authentication
 * @apiPermission none
 *
 * @apiParam {String} email User's email address - must be unique
 * @apiParam {String} password User's password
 *
 * @apiUse SuccessJSONAPIUserLoggedIn
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */
function authLogIn(req, res) {
  const user = req.user.toJSON();
  const serializedUser = UserSerializer.serialize(user);

  return res.status(200).send(serializedUser);
}

module.exports = authLogIn;
