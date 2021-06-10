const mongoose = require("mongoose");

const product = new mongoose.Schema({
  title: { type: String, require: true },
  tags: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
  date: { type: Date, default: Date.now },
  optionsToExchange: { type: Boolean, require: true },
  itemLength: { type: String, require: true },
  itemHeight: { type: String, require: true },
  itemWidth: { type: String, require: true },
  itemWeight: { type: String, require: true },
  location: { type: String, require: true },
  shortDescription: { type: String, require: true },
  ready: { type: Boolean, default: false },
  sold: { type: Boolean, default: false },
  img:
  {
      data: Buffer,
      contentType: String
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Product", product);
