const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const router = require('./router');
const app = express();

app.use(morgan('dev'));
app.use(router);

app.listen(config.port, () => {
  console.info(`Express is running: http://localhost:${config.port}/`);
});
