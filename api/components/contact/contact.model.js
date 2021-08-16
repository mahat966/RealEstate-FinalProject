const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
        type:String
    },
    email: {
        type:String
    },
    message: {
        type:String
    },
   
  
  },
  {
    timestamps: true,
  }
);

const ContactItemModel = mongoose.model("contact", contactItemSchema);
module.exports = ContactItemModel;
