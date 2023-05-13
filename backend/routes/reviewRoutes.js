const express = require('express')
const reviewRouter = express.Router();

reviewRouter.get('/review', (req, res) => {
    res.send('hello reviewRouter')
})

module.exports = reviewRouter