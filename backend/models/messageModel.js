const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: String,
    },
    senderId: {
        type: String
    },
    messages: {
        type: String
    }
},
    {
        timestamps: true
    })




const Message = mongoose.model('Message', MessageSchema)
module.exports = Message