const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 40,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
