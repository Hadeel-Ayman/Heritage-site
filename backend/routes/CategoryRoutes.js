const express = require('express');
const auth = require('../middleware/auth');
const { getCategory, PostCategory, PatchCategory, Deletecategory } = require('../controllers/categoryController');
const CategoryRouter = express.Router();


CategoryRouter.get('/category', auth, getCategory)
CategoryRouter.post('/category', auth, PostCategory)
CategoryRouter.patch('/category/:id', auth, PatchCategory)
CategoryRouter.delete('/category/:id', auth, Deletecategory)

module.exports = CategoryRouter