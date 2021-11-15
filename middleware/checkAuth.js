const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  // let userValid = true;

  const token = req.header("bearer-token");

  if (!token) {
    return res.json({ error: "No token found" });
  }

  try {
    let userData = await JWT.verify(token, "glkeenrkvjnergkjnekrjnedsklje");
    req.user = userData.email;
    next();
  } catch (error) {
    return res.json({ error: "Invalid token" });
  }

  // if (userValid) {
  //   next();
  // } else {
  //   res.json({ error: "Invalid credentials" });
  // }
};
