// Conforms to:
// http://jsonapi.org/format/#errors
const ErrorSerializer = {
  serialize: (status, title) => ({ errors: [{ status, title }] })
};

module.exports = ErrorSerializer;
