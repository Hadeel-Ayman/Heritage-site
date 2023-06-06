const express = require('express');
const { postService, getService, getServiceById, patchService, deleteService, profile } = require('../controllers/serviceContoller');
const auth = require('../middleware/auth');
const serviceRouter = express.Router();

serviceRouter.post('/service', auth, postService)
serviceRouter.get('/service', auth, getService)
serviceRouter.get('/getService', getService)
serviceRouter.get('/service/:id', auth, getServiceById)
serviceRouter.patch('/service/:id', auth, patchService)
serviceRouter.delete('/service/:id', auth, deleteService)
serviceRouter.get('/profilee', auth, profile)


module.exports = serviceRouter