const router = require("express").Router();
const designItemCtrl = require("./designItem.controller");
const Uploader = require("../../middlewares/uploader");

module.exports = function (authenticate) {
  router
    .route("/")
    .get(designItemCtrl.get)
    .post(Uploader.array("image"), authenticate, designItemCtrl.post);

  router
    .route("/:id")
    .get(designItemCtrl.getById)
    .put(Uploader.single("image"), authenticate, designItemCtrl.update)
    .delete(authenticate, designItemCtrl.remove);

  return router;
};
