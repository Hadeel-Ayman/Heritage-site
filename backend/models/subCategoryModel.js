const mongoose = require('mongoose')


const SubcategorySchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    sub_category: {
        type: String,
        required: true
    }
})

const Subcategory = mongoose.model('Subcategory', SubcategorySchema)
module.exports = Subcategory
