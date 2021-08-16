const router = require("express").Router();
const contactItemCtrl = require("./contact.controller");
const UploadFile = require("../../middlewares/uploadFile");

module.exports = function () {
  router
    .route("/")
    .get(contactItemCtrl.get)
    .post(UploadFile.array("uploadFile"), contactItemCtrl.post);

  router
    .route("/:id")
    .get(contactItemCtrl.getById)
    .put(UploadFile.single("uploadFile"), contactItemCtrl.update)
    .delete(contactItemCtrl.remove);

  return router;
};
