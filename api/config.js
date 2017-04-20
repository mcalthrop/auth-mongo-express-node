const APP_SECRET = process.env.APP_SECRET;
const PORT = process.env.PORT || 4001;
const MONGODB_URI = process.env.MONGODB_URI;
const mandatoryEnvVars = ['APP_SECRET', 'MONGODB_URI'];

const config = {
  port: PORT,
  db: {
    uri: MONGODB_URI
  },
  secret: APP_SECRET
};

function checkEnvVars() {
  mandatoryEnvVars.forEach((mandatoryEnvVar) => {
    if (!process.env[mandatoryEnvVar]) {
      console.error(`Missing mandatory environment variable: ${mandatoryEnvVar}`);
      process.exit(1);
    }
  });
}

checkEnvVars();

console.info('MONGODB_URI:', MONGODB_URI);
console.info('PORT:', PORT);

module.exports = config;
