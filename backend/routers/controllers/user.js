const usersModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
const salt = Number(process.env.SALT);
///////////////////////////////////////////////////////////
//edit profile
const editProfile = async (req, res) => {
  const id = req.query.id;
  let password = await bcrypt.hash(req.body.password, salt);
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let city = req.body.city;
  usersModel
    .findByIdAndUpdate(id, {firstName, lastName, city, password},{ new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send("can't edit profile");
    });
};
///////////////////////////////////////////////////////////
//delete profile
const deleteProfile = (req, res) => {
  const id = req.query.id;
  usersModel
    .findByIdAndDelete(id)
    .then((result) => {
      res.json({ message: "success delete the user" });
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUserById = (req, res) => {
  const id = req.query.id;
  usersModel
    .findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  editProfile,
  deleteProfile,
  getUserById,
};
