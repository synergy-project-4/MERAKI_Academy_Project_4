const usersModel = require("./../../../db/models/user");

const login = (req, res) => {
  const { email, password } = req.body;

  usersModel
    .authenticateBasic(email.toLowerCase(), password)
    .then((result) => {
      if (result[1] === 200)
        return res
          .status(result[1])
          .json({ token: result[0], id: result[2], name: result[3] });

      res.status(result[1]).json(result[0]);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  login,
};
