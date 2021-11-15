const mongoose = require("mongoose");

const publicPostsSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const publicPostsModel = new mongoose.model(
  "publicPostsModel",
  publicPostsSchema
);

module.exports = publicPostsModel;
