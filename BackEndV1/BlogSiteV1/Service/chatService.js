const Message = require('../Model/messageModel');

const sendMessage = async (senderId, receiverId, messageContent) => {
  try {
    console.log("senderId:",senderId);
    const newMessage = new Message({
      sender: senderId,
      receiver: receiverId,
      messageContent,
    });
    console.log("newMessage:",newMessage);
    await newMessage.save();
    return newMessage;
  } catch (err) {
    console.error('Error sending message:', err);
    throw new Error('Could not send message');
  }
};

const getMessages = async (userId, contactId) => {
  try {
    return await Message.find({
      $or: [
        { sender: userId, receiver: contactId },
        { sender: contactId, receiver: userId },
      ],
    }).sort({ timestamp: 1 });
  } catch (err) {
    console.error('Error retrieving messages:', err);
    throw new Error('Could not retrieve messages');
  }
};

module.exports = { sendMessage, getMessages };
