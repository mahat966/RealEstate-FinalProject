const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },

    soldBy: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
    },
    price: {
      type: String,
    },
    propertyLocation: {
      type: String,
    },
    landSize: {
      type: String,
    },
    roadSize: {
      type: String,
    },
    floor: {
      type: String,
    },
    totalRooms: {
      type: String,
    },

    images: [String],
  },
  {
    timestamps: true,
  }
);

const PropertyModel = mongoose.model("property", PropertySchema);
module.exports = PropertyModel;
