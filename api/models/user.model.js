const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bcrypt = require('bcrypt-nodejs');
const validRoles = ['admin', 'standard'];

const userSchema = mongoose.Schema({
  role: { type: String, required: true, enum: validRoles },
  local: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
  }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.isPasswordValid = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

userSchema.statics.validRoles = () => validRoles;

userSchema.statics.isRoleValid = (roleToCheck) => validRoles.includes(roleToCheck);

userSchema.set('toJSON', {
  versionKey: false,
  transform: (doc, json) => {
    delete json.local.password;

    return json;
  }
});

module.exports = mongoose.model('User', userSchema);
