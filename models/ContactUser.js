const mongoose = require("mongoose");

const ContactUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const ContactUser = new mongoose.model("ContactUser", ContactUserSchema);

module.exports = ContactUser ;
