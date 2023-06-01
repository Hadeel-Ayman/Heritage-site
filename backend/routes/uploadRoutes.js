const express = require('express');
const { getUpload, PostUpload } = require('../controllers/uploadController');
const uploadRoute = express.Router()

uploadRoute.get('/upload', getUpload)
uploadRoute.post('/upload', PostUpload)


module.exports = uploadRoute