const express = require('express');
const { sendMessage, getMessages } = require('../Controller/chatController');
const authMiddleware = require('../MiddleWare/authMiddleware'); // Assuming you have an authentication middleware
const router = express.Router();

router.post('/messages', authMiddleware, sendMessage);
router.get('/messages/:contactId', authMiddleware, getMessages);

module.exports = router;
