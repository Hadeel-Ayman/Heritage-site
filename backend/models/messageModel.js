const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth'
    },
    content: {
        type: String,
        trim: true
    },
    content: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    }
},
    {
        timestamps: true
    })




const Message = mongoose.model('Message', MessageSchema)
module.exports = Message