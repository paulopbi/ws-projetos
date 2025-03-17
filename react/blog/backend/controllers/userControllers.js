const bcrypt = require("bcryptjs");
const HttpError = require("../models/errorModel");
const User = require("../models/userModel");

//REGISTER: api/users/register (POST)
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password) {
      return next(new HttpError("All fields are required", 422));
    }

    const newEmail = email.toLowerCase();
    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return next(new HttpError("Email already exists", 422));
    }

    if (password.trim().length < 6) {
      return next(
        new HttpError("Password must be at least 6 characters long", 422)
      );
    }

    if (password !== password2) {
      return next(new HttpError("Passwords do not match", 422));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPass,
    });

    res.status(201).json(`New user ${newUser.email} created.`);
  } catch (error) {
    return next(new HttpError("User registration failed", 422));
  }
};

//LOGIN: api/users/login (POST)
const loginUser = async (req, res, next) => {
  res.json("Login User");
};
//PROFILE: api/users/:id (POST)
const getUser = async (req, res, next) => {
  res.json("Get User");
};

//USER AVATAR: api/users/:id (POST)
const changeAvatar = async (req, res, next) => {
  res.json("Change User Avatar");
};

//EDIT USER: api/users/edit-user (POST)
const editUser = async (req, res, next) => {
  res.json("Edit user details");
};

//AUTHORS: api/users/authors (POST)
const getAuthors = async (req, res, next) => {
  res.json("Get all users");
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors,
};
