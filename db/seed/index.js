const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const UserModel = require('../../api/models/user.model');
const common = require('../common');
const seedUsers = require('./users.json');

function createUser(user) {
  const userModel = new UserModel();

  userModel.role = user.role;
  userModel.local = {
    email: user.local.email,
    firstName: user.local.firstName,
    lastName: user.local.lastName,
    password: userModel.generateHash(user.local.password)
  };

  return userModel.save(
    (err) => {
      if (err) {
        console.error(`  ERROR: could not create user: ${user.local.email} (${user.role}): `, err);
      }
    }
  ).then(
    () => {
      console.info(`  user created: ${user.local.email} (${user.role})`);

      return UserModel.findOne({'local.email': user.local.email});
    }
  );
}

function createUsers() {
  const promises = [];

  console.info('Seeding users');
  seedUsers.forEach((seedUser) => {
    const promise = UserModel.findOne({'local.email': seedUser.local.email}).then(
      (existingUser) => {
        if (existingUser) {
          console.info(`  INFO: user already exists: ${seedUser.local.email}; not creating`);
          return existingUser;
        } else {
          return createUser(seedUser);
        }
      }
    );
    promises.push(promise);
  });

  return Promise.all(promises).then(
    () => console.info('-> users seeded')
  );
}

common.connect()
  .then(createUsers)
  .then(common.disconnect)
  .then(common.done)
  .catch(common.error);
