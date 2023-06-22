const express = require('express');
const { getProfile, editProfile, deleteProfile, addProfile, getProfileById } = require('../controllers/editProfileController');
const profileRoute = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/profile')
    },
    filename: function (req, file, cb) {
        const date = Date.now() + '-' + file.originalname
        cb(null, file.fieldname + '-' + date)
    }
})

const upload = multer({ storage: storage }).single('avatar');


profileRoute.get('/Profile', auth, getProfile)
profileRoute.post('/Profile', auth, upload, addProfile)
profileRoute.patch('/Profile/:id', auth, upload, editProfile)
profileRoute.get('/Profile/:id', auth, getProfileById)
profileRoute.delete('/Profile/:id', auth, deleteProfile)


module.exports = profileRoute