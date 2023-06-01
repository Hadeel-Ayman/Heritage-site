const mongoose = require('mongoose')

const ConversationSchema = new mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth'
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
},
    {
        timestamps: true
    })




const Conversation = mongoose.model('Conversation', ConversationSchema)
module.exports = Conversation