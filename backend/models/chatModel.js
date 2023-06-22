const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth'
    },
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth'
    },
    message: {
        type: String,
        required: true
    },

},
    {
        timestamps: true
    })




const Chat = mongoose.model('Chat', ChatSchema)
module.exports = Chat