const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GallerySchema = new Schema({
    images: [String],

}, {
    timestamps: true
})

const GalleryModel = mongoose.model('gallery', GallerySchema);
module.exports = GalleryModel;