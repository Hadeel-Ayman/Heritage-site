const express = require('express');
const userRouter = express.Router();
const { getUser, postUser, getSingleUser, patchUser, deleteUser } = require('../controllers/userController');

userRouter.get('/user', getUser)
userRouter.post('/user', postUser)
userRouter.get('/user/:id', getSingleUser)
userRouter.patch('/user/:id', patchUser)
userRouter.delete('/user/:id', deleteUser)

module.exports = userRouter
