const Message = require("../models/messageModel")

// POST Message
const postMessage = async (req, res) => {
    const { conversationId, senderId, messages } = req.body
    const message = new Message({ conversationId, senderId, messages })
    try {
        const resp = await message.save()
        res.status(200).send(resp)
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// GET Message
const getMessage = async (req, res) => {
    const { conversationId } = req.params
    try {
        const result = await Message.find({ conversationId })
        res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    postMessage,
    getMessage
}