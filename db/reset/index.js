const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const UserModel = require('../../api/models/user.model');
const common = require('../common');

function removeUsers() {
  console.info('Removing users');

  return UserModel.remove({}).then(
    () => {
      console.info('-> users removed');
    }
  );
}

common.connect()
  .then(removeUsers)
  .then(common.disconnect)
  .then(common.done)
  .catch(common.error);
