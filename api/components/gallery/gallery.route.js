const router = require("express").Router();
const galleryItemGallery = require("./gallery.controller");
const Uploader = require("../../middlewares/uploader");

module.exports = function (authenticate) {
  router
    .route("/")
    .get(galleryItemGallery.get)
    .post(Uploader.array("image"), authenticate, galleryItemGallery.post);

  router
    .route("/:id")
    .get(galleryItemGallery.getById)
    .put(Uploader.single("image"), authenticate, galleryItemGallery.update)
    .delete(authenticate, galleryItemGallery.remove);

  return router;
};
