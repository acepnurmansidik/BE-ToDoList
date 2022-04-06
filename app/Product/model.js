const mongoose = require("mongoose");

let todoSchema = mongoose.Schema({
  productName: {
    type: String,
  },
  qty: {
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: Text,
  },
  thumbnail: {
    type: String,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
