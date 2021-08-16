require('dotenv').config();
const { urlencoded } = require("express");
const express = require("express");
const app = express(); // app is entire express framework
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
require("./db");
const port = process.env.PORT;

// import routing level middleware
const APIRoute = require("./routes/api.route");

// implement CORS
app.use(cors());

// load inbuilt middleware
app.use(express.static("uploads")); // for__dirname,'uploads' erving
app.use("/file", express.static(path.join(__dirname, "uploads"))); // for external serving
// server must parse incoming request
// parse from-encoded-data
app.use(
  urlencoded({
    extended: true,
  })
);
// JSON  parser
app.use(express.json());
// this middleware will parse incoming data and add it in req.body property

// third party middleware
app.use(morgan("dev"));

// load routing level middleware
app.use("/api", APIRoute);

// catch 404
app.use(function (req, res, next) {
  next({
    msg: "Not Found",
    status: 404,
  });
});

app.use(function (err, req, res, next) {
  console.log("error is >>", err);

  res.status(err.status || 400);
  res.json({
    msg: err.msg || err,
    status: err.status || 400,
  });
});

app.listen(port, function (err, done) {
  if (err) {
    console.log("server listening failed ");
  } else {
    console.log(`API is started on http://localhost:${port}`);
    console.log("press CTRL + C to exit");
  }
});
