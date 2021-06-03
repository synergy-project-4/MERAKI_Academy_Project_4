const usersModel = require("./../../db/models/user");
///////////////////////////////////////////////////////////
//edit profile
const editProfile = (req, res) => {
    const id = req.query.id;
    const { password, confirmPassword } = req.body;
    if (password == confirmPassword) {
        usersModel
            .findByIdAndUpdate(id, req.body, { new: true })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.send(err);
            });
    }
    else {
         res.send("password not equal confirmPassword");
         }
}
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
module.exports = {
    editProfile,
    deleteProfile
}