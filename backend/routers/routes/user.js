const express = require("express");
const { editProfile, deleteProfile ,getUserById} = require(('../controllers/user'))
const authentication = require('./../middlewares/authentication');

const editProfileRouter = express.Router();

editProfileRouter.put('/profile/edit',authentication, editProfile)
editProfileRouter.delete('/profile/edit',authentication, deleteProfile)
editProfileRouter.get('/profile',authentication, getUserById)
module.exports = editProfileRouter
