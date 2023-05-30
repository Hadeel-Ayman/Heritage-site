const express = require('express')
const detailesRouter = express.Router();

detailesRouter.get('/detailes', (req, res) => {
    res.send('hello detailesRouter')
})

module.exports = detailesRouter