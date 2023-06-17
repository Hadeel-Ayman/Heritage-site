const express = require('express');
const { getProductCategory, PostProductCategory, PatchProductCategory, DeleteProductCategory } = require('../controllers/ProductController');
const ProductRouter = express.Router();
const auth = require('../middleware/auth');

ProductRouter.post('/productCategory', auth, PostProductCategory)
ProductRouter.get('/productCategory', auth, getProductCategory)
ProductRouter.patch('/productCategory/:id', auth, PatchProductCategory)
ProductRouter.delete('/productCategory/:id', auth, DeleteProductCategory)

module.exports = ProductRouter