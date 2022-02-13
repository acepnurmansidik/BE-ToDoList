const mongoose = require("mongoose");

let todoSchema = mongoose.Schema({
  status: {
    type: String,
    enum: ["pending", "success"],
    default: "pending",
  },
  title: {
    type: String,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
