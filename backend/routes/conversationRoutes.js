const express = require('express');
const { postConversation, findChat, getUserChat } = require('../controllers/conversationController.js');
const conversationRouter = express.Router();

conversationRouter.post('/conversation', postConversation)
conversationRouter.get('/conversation/:id', getUserChat)
conversationRouter.get('/conversation/chat/:firstId/:secondId', findChat)

module.exports = conversationRouter