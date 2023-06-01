const express = require('express');
const { getProfile, editProfile } = require('../controllers/editProfileController');
const profileRoute = express.Router();


profileRoute.get('/profile', getProfile)
profileRoute.post('/profile', editProfile)



module.exports = profileRoute