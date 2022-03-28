import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import { secret } from '../config/environment.js';

async function registerUser(req, res, next) {
  try {
    if (req.body.password !== req.body.confirmation) {
      return res.status(422).json({ message: 'Passwords do not match' });
    }

    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    next(e);
  }
}

async function loginUser(req, res, next) {
  try {
    // ! Get the user from the database, and grab its hash.
    const user = await User.findOne({ email: req.body.email });
    // ! If there's no user
    if (!user) {
      return res.status(404).json({ message: 'Unauthorized, user not found' });
    }
    // ! Checks against the hashed pw in db, that its correct
    const isValidPw = user.validatePassword(req.body.password);

    if (!isValidPw) {
      return res
        .status(404)
        .json({ message: 'Unauthorized, passwords do not match' });
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin }, // payload on our token
      secret, // the secret that only the developer knows
      { expiresIn: '240h' } // token expires in 240 hours
    );

    return res.status(202).send({ token, message: 'Login successful!' });
  } catch (e) {
    next(e);
  }
}

//! Remove this route on deployment
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin) {
      const user = await User.findById(req.params.id);
      user.set(req.body);
      const savedUser = await user.save();
      return res.status(200).json(savedUser);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a user'
    });
  } catch (e) {
    next(e);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin) {
      const user = await User.deleteOne({ _id: req.params.id });
    }
    return res.status(204).send('User successfully deleted');
  } catch (err) {
    next(err);
  }
};

export default {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers
};
