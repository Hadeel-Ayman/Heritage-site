const mongoose = require('mongoose')
// const bcryptjs = require('bcryptjs')
const validator = require('validator')

const MessageSchema = new mongoose.Schema({
    ConversationId: {
        type: String,
        required: true
    },
    UserId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    })




const Message = mongoose.model('Message', MessageSchema)
module.exports = Message