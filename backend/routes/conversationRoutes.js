const express = require('express')
const conversationRouter = express.Router();

conversationRouter.get('/conversation', (req, res) => {
    res.send('hello conversationRouter')
})

module.exports = conversationRouter