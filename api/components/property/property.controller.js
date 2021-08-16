const PropertyModel = require('./property.model');
const MAP_PROPERTYDETAILS_REQ = require('../../util/map_propertyDetails_req');

function get(req, res, next) {
    const condition = {};
    
PropertyModel.find(condition)
    .sort({
        _id: -1
    })
    // .limit(2)
    // .skip(1)
    .exec(function (err, done) {
        if (err) {
            return next(err);
        }
        res.json(done);
    })

}
function getById(req, res, next) {
    PropertyModel.findById(req.params.id, function (err, property) {
        if (err) {
            return next(err);
        }
        if (!property) {
            return next({
                msg: "property not found",
                status: 404
            })
        }
        res.json(property);
    })
}
function post(req, res, next) {
 
    const newProperty = new PropertyModel({});
    const data = req.body;
    if (req.file) {
        data.images = req.file.filename
    }
    if (req.files) {
        data.images = req.files.map(function (file) {
            return file.filename
        })
    }
  

    MAP_PROPERTYDETAILS_REQ(newProperty, data);

    newProperty.save(function (err, done) {
        if (err) {
            return next(err);
        }
        res.json(done);
    })

}
function update(req, res, next) {

    const data = req.body;
    console.log("files",data);

 
    if (req.files.length > 0) {
        console.log("files",req.files);
 const newImages = req.files.map(function(file){
     return file.filename
 })
         data.images= newImages
    }
    

    PropertyModel.findById(req.params.id, function (err, property) {
        if (err) {
            return next(err);
        }
        if (!property) {
            return next({
                msg: "property not found",
                status: 404
            })
        }
        // todo add data in req.body
        MAP_PROPERTYDETAILS_REQ(property, data);

        property.save(function (err, updated) {
            if (err) {
                return next(err);
            }
            if (req.file) {
                // remove old images
            }
            res.json(updated);
        })

    })

}
function remove(req, res, next) {

    PropertyModel.findById(req.params.id, function (err, property) {
        if (err) {
            return next(err);
        }
        if (!property) {
            return next({
                msg: "property not found",
                status: 404
            })
        }
        property.remove(function (err, removed) {
            if (err) {
                return next(err);
            }
            res.json(removed);
        })
    })

}



module.exports = {
    get,
    getById,
    post,
    update,
    remove
}
