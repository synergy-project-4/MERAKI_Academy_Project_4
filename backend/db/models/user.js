const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const salt = Number(process.env.SALT);

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

users.statics.authenticateBasic = async function (email, password) {
  try {
    const user = await this.findOne({ email });
    if (!user) return ["The email doesn't exist", 404];

    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      const payload = {
        userId: user._id,
        role: user.admin,
      };

      const options = {
        expiresIn: '60m',
      };

      return [jwt.sign(payload, process.env.SECRET, options), 200];
    }
    return ['The password you’ve entered is incorrect', 403];
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = mongoose.model("User", users);
