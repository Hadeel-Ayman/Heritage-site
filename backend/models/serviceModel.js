const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const ServiceModel = mongoose.model('Service', ServiceSchema)
module.exports = ServiceModel