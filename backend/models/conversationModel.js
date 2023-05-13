const mongoose = require('mongoose')
// const bcryptjs = require('bcryptjs')
const validator = require('validator')

const ConversationSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    sellerId: {
        type: String,
        required: true,
    },
    buyerId: {
        type: String,
        required: true,
    },
    readBySeller: {
        type: Boolean,
        required: true,
    },
    readByBuyer: {
        type: Boolean,
        required: true,
    },
    lastMessage: {
        type: String,
        required: false,
    },
},
    {
        timestamps: true
    })




const Conversation = mongoose.model('Conversation', ConversationSchema)
module.exports = Conversation