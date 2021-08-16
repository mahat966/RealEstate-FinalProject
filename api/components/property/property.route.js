const router = require("express").Router();
const propertyCtrl = require("./property.controller");
const Uploader = require("../../middlewares/uploader");

module.exports = function (authenticate) {
  router
    .route("/")
    .get(propertyCtrl.get)
    .post(Uploader.array("image"), authenticate, propertyCtrl.post);

  router
    .route("/:id")
    .get(propertyCtrl.getById)
    .put(Uploader.array("image"), authenticate, propertyCtrl.update)
    .delete(authenticate, propertyCtrl.remove);

  return router;
};
