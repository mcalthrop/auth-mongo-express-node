const MetaSerializer = require('../../serializers/meta.serializer');

/**
 * @api {get} /api/logout GET /api/logout
 */
function authLogOut(req, res) {
  const status = 200;
  const serializedMessage = MetaSerializer.serialize({ status, message: 'Successfully logged out' });

  req.logout();

  return res.status(status).json(serializedMessage);
}

module.exports = authLogOut;
