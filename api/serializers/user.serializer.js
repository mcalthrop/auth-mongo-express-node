const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const UserSerializer = new JSONAPISerializer('user', {
  attributes: ['role', 'local'],
  id: '_id',
  local: {
    attributes: ['email', 'firstName', 'lastName']
  },
  pluralizeType: false,
  keyForAttribute: 'camelCase'
});

module.exports = UserSerializer;
