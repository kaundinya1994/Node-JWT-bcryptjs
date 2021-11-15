const mongoose = require("mongoose");

const privatePostsSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const privatePostsModel = new mongoose.model(
  "privatePostsModel",
  privatePostsSchema
);

module.exports = privatePostsModel;
