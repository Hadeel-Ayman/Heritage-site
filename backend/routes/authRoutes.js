const express = require('express');
const authRouter = express.Router();
const { register, login, logout, getUserById, getUser } = require('../controllers/authController');


// register
authRouter.post('/register', register)


// login
authRouter.post('/login', login)

//getUserById
authRouter.get('/auth/:id', getUserById)

//getUser
authRouter.get('/auth', getUser)

// logout
authRouter.delete('/logout', logout)


module.exports = authRouter