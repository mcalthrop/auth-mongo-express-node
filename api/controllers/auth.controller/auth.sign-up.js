const UserSerializer = require('../../serializers/user.serializer');

/**
 * @api {post} /api/signup POST /api/signup
 * @apiDescription Provide facility to create a new user account on the site
 *
 * @apiName Signup
 * @apiGroup Authentication
 * @apiPermission none
 *
 * @apiParam {String} email User's email address - must be unique
 * @apiParam {String} [firstName] User's first name
 * @apiParam {String} [lastName] User's last name
 * @apiParam {String} password User's password
 * @apiParam {String} passwordConfirmation Must match the `password` parameter
 *
 * @apiUse SuccessJSONAPIUserCreated
 * @apiUse BadRequestError
 * @apiUse ConflictError
 * @apiUse InternalServerError
 */
function authSignUp(req, res) {
  const user = req.user.toJSON();
  const serializedUser = UserSerializer.serialize(user);

  return res.status(201).json(serializedUser);
}

module.exports = authSignUp;
