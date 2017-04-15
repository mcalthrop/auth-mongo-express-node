const APP_SECRET = process.env.APP_SECRET;
const PORT = process.env.PORT || 4001;
const MONGODB_URI = process.env.MONGODB_URI;

const config = {
  port: PORT,
  db: {
    uri: MONGODB_URI
  },
  secret: APP_SECRET
};

module.exports = config;
