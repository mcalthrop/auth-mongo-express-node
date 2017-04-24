const UserSerializer = require('../../serializers/user.serializer');

/**
 * @api {get} /api/me GET /api/me
 * @apiDescription Request information about the logged-in user.
 *
 * If the user is not logged in, return a 401.
 *
 * @apiName GetMe
 * @apiGroup Me
 * @apiPermission admin, standard
 *
 * @apiUse SuccessJSONAPIUser
 * @apiUse ResourceNotFoundError
 * @apiUse UnauthorizedError
 */
function meIndex(req, res) {
  const user = req.user.toJSON();
  const status = 200;
  const serializedUser = UserSerializer.serialize(user);

  console.info(`meIndex: found user "${user.local.email}"`);

  return res.status(status).send(serializedUser);
}

module.exports = meIndex;
