const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
  mId: {
    type: String,
    required: [true, "Please add Meal Id"],
    unique: true,
  },
  categoryId: {
    type: Array,
    required: [true, "Please add CategoryId"],
  },
  mealName: {
    type: String,
    required: [true, "Please add Meal name"],
  },
  affordability: {
    type: String,
    enum: ["Affordable", "Pricey", "Luxurious"],
    default: "Affordable",
  },
  complexity: {
    type: String,
    enum: ["Simple", "Hard", "Challenging"],
  },
  imageUrl: {
    type: String,
    default:
      "data:image/png;base64,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",
  },
  estimatedTime: {
    type: Number,
  },
  ingredient: {
    type: Array,
  },
  steps: {
    type: Array,
  },
  isGulatenFree: {
    type: Boolean,
    default: false,
  },
  isVegan: {
    type: Boolean,
    default: false,
  },
  isVegeterian: {
    type: Boolean,
    default: false,
  },
  isLactoseFree: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("meal", MealSchema);
