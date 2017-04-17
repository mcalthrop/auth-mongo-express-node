const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('../api/config');

function connect() {
  console.info('Connecting to database');

  return mongoose.connect(config.db.uri).then(
    () => console.info(`-> connected to ${mongoose.connection.name}`)
  );
}

function disconnect() {
  console.info('Closing connection');

  return mongoose.connection.close().then(
    () => console.info('-> closed')
  );
}

function error(error) {
  console.error('ERROR:', error);
  process.exit(1);
}

function done() {
  console.info('Done');

  return Promise.resolve();
}

module.exports = {
  connect,
  disconnect,
  error,
  done
};
