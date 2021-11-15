const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

router.post(
  "/signup",
  [
    check("email", "Invalid Email").isEmail(),
    check("password", "Invalid Password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const email = req.body.email;
      const password = await bcrypt.hash(req.body.password, 10);

      var userSignUpData = await Users.insertMany([{ email, password }]);

      console.log(userSignUpData);
    } catch (e) {
      if (e.code == 11000) {
        res.json({ error: "Email already exists" });
      }
    }

    const token = JWT.sign({ email }, "glkeenrkvjnergkjnekrjnedsklje", {
      expiresIn: 360000,
    });

    res.json({ token });
  }
);

router.get("/allUsers", async (req, res) => {
  const allUsers = await Users.find({});

  res.json(allUsers);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });

  if (!user) {
    res.status(400).json({ error: "Invalid Credentials" });
  }

  const correctPassword = await bcrypt.compare(password, user.password);

  if (correctPassword) {
       const token = JWT.sign({ email }, "glkeenrkvjnergkjnekrjnedsklje", {
         expiresIn: 3600,
       });

    res.json({ msg: "Login Success", token });
  } else {
    res.json({ error: "Invalid Credentials" });
  }
});
module.exports = router;
