const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    vendor_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    sub_cat_id: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    }
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
