const Utils = require('../../utils');
const UserModel = require('../../models/user.model');
const ErrorSerializer = require('../../serializers/error.serializer');

/**
 * @api {put} /api/me PUT /api/me
 * @apiDescription Update information about the logged-in user.
 *
 * If the user is not logged in, return a 401.
 *
 * @apiName UpdateMe
 * @apiGroup Me
 * @apiPermission admin, standard
 *
 * @apiParam {String} email User's email address - must be unique
 * @apiParam {String} [firstName] User's first name
 * @apiParam {String} [lastName] User's last name
 * @apiParam {String} password User's password
 * @apiParam {String} passwordConfirmation Must match the `password` parameter
 *
 * @apiUse ProcessedSuccess
 * @apiUse BadRequestError
 * @apiUse ResourceNotFoundError
 * @apiUse UnauthorizedError
 */
function meUpdate(req, res) {
  const userId = req.user._id;
  const conditions = { userId };
  const updatedUser = Utils.duplicateObject(req.user);
  let status = 204;

  updatedUser.local.email = req.body.email;
  updatedUser.local.firstName = req.body.firstName;
  updatedUser.local.lastName = req.body.lastName;

  UserModel.findOneAndUpdate(conditions, updatedUser, (err) => {
    if (err) {
      const serializedMessage = ErrorSerializer.serialize(status, 'Error retrieving user to update');

      status = 500;
      console.error(`meUpdate: error finding user with id "${userId}":`, err);

      return res.status(status).json(serializedMessage);
    }
    console.info(`meUpdate: updated user "${updatedUser.local.email}"`);

    return res.status(status).send();
  });
}

module.exports = meUpdate;
