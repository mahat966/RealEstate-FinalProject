const DesignItemModel = require("./designItem.model");
const MAP_DESIGNITEM_REQ = require("../../util/map_designItem_req");

function get(req, res, next) {
  const condition = {};

  DesignItemModel.find(condition)
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
  DesignItemModel.findById(req.params.id, function (err, designItem) {
    if (err) {
      return next(err);
    }
    if (!designItem) {
      return next({
        msg: "designItem not found",
        status: 404,
      });
    }
    res.json(designItem);
  });
}
function post(req, res, next) {
  // insert
  console.log("req.body>>", req.body);
  console.log("req.file >>", req.file);
  console.log("req.files >>", req.files);

  const designItem = new DesignItemModel({});
  const data = req.body;
  if (req.file) {
    data.images = req.file.filename;
  }
  if (req.files) {
    data.images = req.files.map(function (file) {
      return file.filename;
    });
  }

  MAP_DESIGNITEM_REQ(designItem, data);

  designItem.save(function (err, done) {
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
  DesignItemModel.findById(req.params.id, function (err, designItem) {
    if (err) {
      return next(err);
    }
    if (!designItem) {
      return next({
        msg: "designItem not found",
        status: 404,
      });
    }
    // todo add data in req.body
    MAP_DESIGNITEM_REQ(designItem, data);

    designItem.save(function (err, updated) {
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
  DesignItemModel.findById(req.params.id, function (err, designItem) {
    if (err) {
      return next(err);
    }
    if (!designItem) {
      return next({
        msg: "designItem not found",
        status: 404,
      });
    }
    designItem.remove(function (err, removed) {
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
