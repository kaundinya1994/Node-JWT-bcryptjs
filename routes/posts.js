const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");

router.post("/publicCreate", async (req, res) => {
  try {
    const publicPostData = await PublicPostsModel.create(req.body);
    res.json(publicPostData);
  } catch (error) {
    res.json(error);
  }
});

router.get("/publicView", async (req, res) => {
  try {
    const publicPostData = await PublicPostsModel.find();
    res.json(publicPostData);
  } catch (error) {
    res.json(error);
  }
});

router.post("/privateCreate", async (req, res) => {
  try {
    const privatePostData = await PrivatePostsModel.create(req.body);
    res.json(privatePostData);
  } catch (error) {
    res.json(error);
  }
});

router.get(
  "/privateView",
  checkAuth,
  async (req, res) => {
    // For Private posts user will have his JWT token in his header
    // Only valid users who have access to those posts will be able to view them
    // see the content of those private posts

    // This access control is called Authorization

    // This will be acheived using middleware

    try {
      const privatePostData = await PrivatePostsModel.find();
      res.json(privatePostData);
    } catch (error) {
      res.json(error);
    }
  }
);

module.exports = router;
