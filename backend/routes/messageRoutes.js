const express = require('express')
const messageRouter = express.Router();

messageRouter.get('/message', (req, res) => {
    res.send('hello messageRouter')
})

module.exports = messageRouter