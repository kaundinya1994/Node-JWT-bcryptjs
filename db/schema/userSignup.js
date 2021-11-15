const mongoose = require("mongoose");

const userSignUpSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const UserSignUpModel = new mongoose.model("UserSignUp", userSignUpSchema);

module.exports = UserSignUpModel;
