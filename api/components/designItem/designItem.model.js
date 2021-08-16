const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const designItemSchema = new Schema(
  {
    imageType: {
      type: String,
      required: true,
    },
    images: [String],
  },
  {
    timestamps: true,
  }
);

const DesignItemModel = mongoose.model("designItem", designItemSchema);
module.exports = DesignItemModel;
