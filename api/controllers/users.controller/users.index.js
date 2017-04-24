const UserModel = require('../../models/user.model');
const UserSerializer = require('../../serializers/user.serializer');
const ErrorSerializer = require('../../serializers/error.serializer');

/**
 * @api {get} /api/users GET /api/users
 * @apiDescription Request list of users.
 *
 * @apiName GetUsers
 * @apiGroup Users
 * @apiPermission admin
 *
 * @apiUse SuccessJSONAPIUsers
 * @apiUse BadRequestError
 * @apiUse InternalServerError
 */
function usersIndex(req, res) {
  UserModel.find().lean().exec((err, users) => {
    let status = 200;

    if (err) {
      status = 500;
      console.error('usersIndex: UserModel.find(): err:', err);
      return res.status(status).json(ErrorSerializer.serialize(status, 'Error retrieving users'));
    }

    const serializedUsers = UserSerializer.serialize(users);

    return res.status(status).send(serializedUsers);
  });
}

module.exports = usersIndex;
