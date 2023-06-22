const Conversation = require("../models/conversationModel")


//postConversation
const postConversation = async (req, res) => {
    const { firstId, secondId } = req.body
    try {
        const chat = await Conversation.findOne({ members: { $all: [firstId, secondId] } })
        if (chat) res.status(200).json(chat)

        const newChat = new Conversation({
            members: [firstId, secondId]
        })
        const resp = await newChat.save()
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error)
    }
}

//getUserChat
const getUserChat = async (req, res) => {
    try {
        const id = req.params.id
        const resp = await Conversation.find({ members: { $in: [id] } })
        if (!resp) {
            res.status(400).send('conversation not found')
        } else {
            res.status(200).send(resp)
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

// find chat
const findChat = async (req, res) => {
    const { firstId, secondId } = req.params
    try {
        const chat = await Conversation.findOne({
            members: { $all: [firstId, secondId] }
        })
        res.status(200).send(chat)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    postConversation,
    getUserChat,
    findChat
}