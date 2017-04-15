const PORT = process.env.PORT || 4001;
const MONGODB_URI = process.env.MONGODB_URI;

const config = {
  port: PORT,
  db: {
    uri: MONGODB_URI
  }
};

module.exports = config;
