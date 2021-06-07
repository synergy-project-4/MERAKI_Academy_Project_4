const usersModel = require("./../../../db/models/user");

const createUser = (req, res) => {
  const { firstName, lastName, city, email, password, confirmPassword } =
    req.body;

  const newUser = new usersModel({
    firstName,
    lastName,
    city,
    email,
    password,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
};

const getAllUsers = (req, res) => {
  usersModel
    .find({})
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createUser, getAllUsers };
