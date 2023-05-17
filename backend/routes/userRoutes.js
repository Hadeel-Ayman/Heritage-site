const express = require('express');
const userRouter = express.Router();
const User = require("../models/userModel")
const jwt = require('jsonwebtoken')



// // delete

userRouter.delete('/user/:id', async (req, res) => {
    const token = req.cookies.accessToken
    if (!token) {
        return res.status(400).send('user not found')
    }
    jwt.verify(token, 'hadeel', (err, payload) => {
        res.send(payload)
    })
})


module.exports = userRouter