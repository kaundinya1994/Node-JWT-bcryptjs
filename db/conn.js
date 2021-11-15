const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Node-Autherntication-Authorization", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Conn success");
  })
  .catch((e) => {
    console.log("DB Conn error", e);
  });
