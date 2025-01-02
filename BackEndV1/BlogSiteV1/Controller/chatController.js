const chatService = require('../Service/chatService');

// Send a message
const sendMessage = async (req, res) => {
  try {
    const { senderId } = req.user;
    const { userId } = req.user;

    const { receiverId, messageContent } = req.body;
    console.log("senderId Controller:",senderId);
    console.log("UserId Controller:",userId);
    console.log("receiverId Controller:",receiverId);
    console.log("messageContent Controller:",messageContent);
  //  const senderId = req.user.id; // Assuming `req.user` contains the authenticated user ID

    const newMessage = await chatService.sendMessage(userId, receiverId, messageContent);
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: 'Error sending message' });
  }
};

// Get messages between two users
const getMessages = async (req, res) => {
  try {
    const { contactId } = req.params;
    const { userId } = req.user;
    // Assuming `req.user` contains the authenticated user ID

    const messages = await chatService.getMessages(userId, contactId);
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving messages' });
  }
};

module.exports = { sendMessage, getMessages };
