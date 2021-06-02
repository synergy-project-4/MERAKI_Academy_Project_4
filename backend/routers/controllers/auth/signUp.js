const usersModel = require("./../../../db/models/user");

const createUser = (req, res) => {
  const { firstName, lastName, city, email, password, confirmPassword } =
    req.body;
  if (password === confirmPassword) {
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
        res.send(err);
      });
  } else {
    res.status(403);
    res.json("entered password does not match");
  }
};

// create a middleware and genrate a token
// const authentication = () =>{

// }

module.exports = { createUser };
