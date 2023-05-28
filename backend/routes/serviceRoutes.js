const express = require('express');
const { postService, getService, getServiceById, patchService, deleteService } = require('../controllers/serviceContoller');
const auth = require('../middleware/auth');
const serviceRouter = express.Router();

serviceRouter.post('/service', postService)
serviceRouter.get('/service', getService)
serviceRouter.get('/service/:id', getServiceById)
serviceRouter.patch('/service/:id', patchService)
serviceRouter.delete('/service/:id', deleteService)

module.exports = serviceRouter