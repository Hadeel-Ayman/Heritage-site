const express = require('express');
// const { register, login, logout } = require('../controllers/authController');
const userRouter = express.Router();
const jwt = require('jsonwebtoken')
const User = require("../models/userModel")


userRouter.post('/register', (req, res) => {
    const user = new User(req.body)
    user.save()
        .then((data) => res.status(200).send(data))
        .catch((e) => res.status(400).send(e))
})


userRouter.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e.message)
    }
})


// userRouter.get('/logout', logout)

module.exports = userRouter