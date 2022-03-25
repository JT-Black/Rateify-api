import mongoose from 'mongoose';
// ! Import bcrypt
import bcrypt from 'bcrypt';
import mongooseHidden from 'mongoose-hidden';
import uniqueValidator from 'mongoose-unique-validator';

import { emailRegex, passwordRegex } from '../lib/stringTesters.js';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (email) => emailRegex.test(email)
  },
  password: {
    type: String,
    required: true,
    // minimum of 8 characters, at least one letter, one number and one special character
    validate: (password) => passwordRegex.test(password)
  },
  isAdmin: { type: Boolean }
});

// ! This function will get called just before a document gets saved (pre save).
// ! We want to take the password, and hash it, before we save it.
userSchema.pre('save', function encryptPassword(next) {
  // * this -> new document that's gonna be created { username: ..., password: ... etc. }
  // * hashSync -> turn my password into a hash
  // * bcrypt.genSaltSync() -> adds a SALT. A salt is an extra string that gets added to the end
  // * of our hash, making it just a little bit more secure.
  // ! If the password has changed...
  if (this.isModified('password')) {
    // ! Hashing the password
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
  }
  // ! Tell mongoose to continue its lifecycle
  next();
});

// ! This function will compare the password the user logs in with, with the hashed pw in database.
// ! So the 2 hashes get compared together, if they're the same, you're golden.
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.plugin(
  mongooseHidden({ defaultHidden: { password: true, email: true } })
);

userSchema.plugin(uniqueValidator);

export default mongoose.model('User', userSchema);
