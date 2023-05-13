const express = require('express')
const orderRouter = express.Router();

orderRouter.get('/order', (req, res) => {
    res.send('hello orderRouter')
})

module.exports = orderRouter