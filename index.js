const express = require("express");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

require("./db/conn");
global.Users = require("./db/schema/userSignup");
global.PublicPostsModel = require("./db/schema/postsPublic");
global.PrivatePostsModel = require("./db/schema/postsPrivate");

const app = express();
app.use(express.json());

app.use("/auth", authRoute);
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.json("This is root directory");
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
