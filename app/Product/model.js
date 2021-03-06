const mongoose = require("mongoose");

let productSchema = mongoose.Schema({
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
    type: String,
  },
  thumbnail: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
