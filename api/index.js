const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config');
const router = require('./router');
const app = express();

mongoose.connect(config.db.uri, (err) => {
  if (err) {
    console.error('Could not connect to Mongo: err:', err);
    process.exit(1);
  }
  console.info('Connected to database:', mongoose.connection.name);
});

app.use(morgan('dev'));
app.use(router);

app.listen(config.port, () => {
  console.info(`Express is running: http://localhost:${config.port}/`);
});
