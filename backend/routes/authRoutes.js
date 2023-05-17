const express = require('express');
const authRouter = express.Router();
const User = require("../models/userModel")


// register
authRouter.post('/register', async (req, res) => {
    try {
        const user = new User(req.body)
        const token = await user.generateToken()
        await user.save()
        res.status(200).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})


// login
authRouter.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.cookie('accessToken', token, {
            httpOnly: true
        }).status(200).send({ user, token })
    } catch (e) {
        res.status(400).send(e.message)
    }
})


// authRouter.get('/logout', logout)

module.exports = authRouter