const MetaSerializer = require('../../serializers/meta.serializer');

/**
 * @api {get} /api/logout GET /api/logout
 * @apiDescription Provide facility to log out of the site
 * @apiName Logout
 * @apiGroup Authentication
 * @apiPermission none
 *
 * @apiUse SuccessMetaJSONAPI
 * @apiUse InternalServerError
 */
function authLogOut(req, res) {
  const status = 200;
  const serializedMessage = MetaSerializer.serialize({ status, message: 'Successfully logged out' });

  req.logout();

  return res.status(status).json(serializedMessage);
}

module.exports = authLogOut;
