const express = require('express');
const auth = require('../middleware/auth');
const { getSubCategory, PostSubCategory, PatchSubCategory, DeleteSubCategory } = require('../controllers/SubcategoryController');
const SubcategoryRouter = express.Router();

SubcategoryRouter.get('/subCategory', auth, getSubCategory)
SubcategoryRouter.post('/subCategory', auth, PostSubCategory)
SubcategoryRouter.patch('/subCategory/:id', auth, PatchSubCategory)
SubcategoryRouter.delete('/subCategory/:id', auth, DeleteSubCategory)

module.exports = SubcategoryRouter