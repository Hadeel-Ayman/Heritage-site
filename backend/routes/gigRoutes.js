const express = require('express')
const gigRouter = express.Router();

gigRouter.get('/gig', (req, res) => {
    res.send('hello gigRouter')
})

module.exports = gigRouter