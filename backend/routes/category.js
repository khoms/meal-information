const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: {
    cId: String,
    required: [true, "Please add Category Id"],
    unique: true,
  },
  category: {
    type: String,
    required: [true, "Please add Category name"],
    unique: true,
  },
  colorCode: {
    type: String,
    default: "#800080",
  },
});

module.exports = mongoose.model("notice", CategorySchema);
