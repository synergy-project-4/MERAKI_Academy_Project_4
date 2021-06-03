const express = require("express");

const  {
    editProfile,
    deleteProfile}=require(('../controllers/user'))
const editProfileRouter = express.Router();
editProfileRouter.put('/profile/edit',editProfile)
editProfileRouter.delete('/profile/edit',deleteProfile)
module.exports = editProfileRouter
