const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create new user
const users = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  city: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String },
  admin: { type: Boolean, default: false },
  notification: [{ type: String }],
  followed: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// Hashed the password
users.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", users);
