const GalleryModel = require("./gallery.model");
const MAP_GALLERY_REQ = require("../../util/map_gallery_req");

function get(req, res, next) {
  const condition = {};

  GalleryModel.find(condition)
    .sort({
      _id: -1,
    })
    // .limit(2)
    // .skip(1)
    .exec(function (err, done) {
      if (err) {
        return next(err);
      }
      res.json(done);
    });
}
function getById(req, res, next) {
  GalleryModel.findById(req.params.id, function (err, galleryItem) {
    if (err) {
      return next(err);
    }
    if (!galleryItem) {
      return next({
        msg: "galleryItem not found",
        status: 404,
      });
    }
    res.json(galleryItem);
  });
}
function post(req, res, next) {
  // insert
  console.log("req.body>>", req.body);
  console.log("req.file >>", req.file);
  console.log("req.files >>", req.files);

  const newGalleryItem = new GalleryModel({});
  const data = req.body;
  if (req.file) {
    data.images = req.file.filename;
  }
  if (req.files) {
    data.images = req.files.map(function (file) {
      return file.filename;
    });
  }

  MAP_GALLERY_REQ(newGalleryItem, data);

  newGalleryItem.save(function (err, done) {
    if (err) {
      return next(err);
    }
    res.json(done);
  });
}
function update(req, res, next) {
  const data = req.body;
  if (req.file) {
    data.images = req.file.filename;
  }
  GalleryModel.findById(req.params.id, function (err, galleryItem) {
    if (err) {
      return next(err);
    }
    if (!galleryItem) {
      return next({
        msg: "galleryItem not found",
        status: 404,
      });
    }
    // todo add data in req.body
    MAP_GALLERY_REQ(galleryItem, data);

    galleryItem.save(function (err, updated) {
      if (err) {
        return next(err);
      }
      if (req.file) {
        // remove old images
      }
      res.json(updated);
    });
  });
}
function remove(req, res, next) {
  GalleryModel.findById(req.params.id, function (err, galleryItem) {
    if (err) {
      return next(err);
    }
    if (!galleryItem) {
      return next({
        msg: "galleryItem not found",
        status: 404,
      });
    }
    galleryItem.remove(function (err, removed) {
      if (err) {
        return next(err);
      }
      res.json(removed);
    });
  });
}

module.exports = {
  get,
  getById,
  post,
  update,
  remove,
};
