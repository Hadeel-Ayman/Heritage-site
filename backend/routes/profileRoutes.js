const express = require('express');
const { getProfile, editProfile, deleteProfile, addProfile, getProfileById } = require('../controllers/editProfileController');
const profileRoute = express.Router();
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const date = Date.now() + '-' + file.originalname
        cb(null, file.fieldname + '-' + date)
    }
})

const upload = multer({ storage: storage }).single('avatar');


profileRoute.get('/getProfile', getProfile)
profileRoute.post('/addprofile', upload, addProfile)
profileRoute.patch('/editprofile/:id', upload, editProfile)
profileRoute.get('/getprofileById/:id', getProfileById)
profileRoute.delete('/deleteprofile/:id', deleteProfile)


module.exports = profileRoute