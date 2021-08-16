const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const config = require("./../configs");

function createToken(data) {
  var token = jwt.sign(
    {
      _id: data._id,
      role: data.role,
      name: data.username,
    },
    config.JWT_secret
  );
  return token;
}

router.post("/login", function (req, res, next) {
  const user = req.body;
  console.log(user);
  if (req.body.username == "admin" && req.body.password == "admin") {
    var authToken = createToken(user);
    res.json({
      user: user,
      token: authToken,
    });

    console.log("successfull admin");
  } else {
    return next({
      msg: "Invalid login credentials. Please try again with correct credentials",
      status: 400,
    });
  }
});

module.exports = router;
