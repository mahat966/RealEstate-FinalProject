const multer = require("multer");
const path = require("path");

function typeFilter(req, file, cb) {
  var mimeType = file.mimetype.split("/")[0];
  if (mimeType === "image") {
    cb(null, true);
  } else {
    req.fileTypeError = true;
    cb(null, false);
  }
}
const myStorage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads/images"));
  },
});

var upload = multer({
  storage: myStorage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
module.exports = upload;
