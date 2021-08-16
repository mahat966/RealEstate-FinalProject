
const ContactItemModel = require("./contact.model");
const MAP_CONTACT_REQ = require("../../util/map_contact_req");

function get(req, res, next) {
  const condition = {};

  ContactItemModel.find(condition)
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
  ContactItemModel.findById(req.params.id, function (err, contact) {
    if (err) {
      return next(err);
    }
    if (!contact) {
      return next({
        msg: "contact not found",
        status: 404,
      });
    }
    res.json(contact);
  });
}
function post(req, res, next) {
  // insert
  console.log("req.body>>", req.body);
  console.log("req.file >>", req.file);
  console.log("req.files >>", req.files);

  const contact = new ContactItemModel({});
  const data = req.body;
  if (req.file) {
    data.uploadFile = req.file.filename;
  }
  if (req.files) {
    data.uploadFile = req.files.map(function (file) {
      return file.filename;
    });
  }

  MAP_CONTACT_REQ(contact, data);

  contact.save(function (err, done) {
    if (err) {
      return next(err);
    }
    res.json(done);
  });
}
function update(req, res, next) {
  const data = req.body;
  if (req.file) {
    data.uploadFile = req.file.filename;
  }
  ContactItemModel.findById(req.params.id, function (err, contact) {
    if (err) {
      return next(err);
    }
    if (!contact) {
      return next({
        msg: "contact not found",
        status: 404,
      });
    }
    // todo add data in req.body
    MAP_CONTACT_REQ(contact, data);

    contact.save(function (err, updated) {
      if (err) {
        return next(err);
      }
      if (req.file) {
        // remove old uploadFile
      }
      res.json(updated);
    });
  });
}
function remove(req, res, next) {
  ContactItemModel.findById(req.params.id, function (err, contact) {
    if (err) {
      return next(err);
    }
    if (!contact) {
      return next({
        msg: "contact not found",
        status: 404,
      });
    }
    contact.remove(function (err, removed) {
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
