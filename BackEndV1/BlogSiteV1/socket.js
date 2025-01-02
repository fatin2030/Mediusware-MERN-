const chatService = require('./Service/chatService');

const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Listen for sendMessage event
    socket.on('sendMessage', async (data) => {
      const { senderId, receiverId, messageContent } = data;
      const newMessage = await chatService.sendMessage(senderId, receiverId, messageContent);
      
      // Emit the message to the receiver
      io.to(receiverId).emit('receiveMessage', newMessage);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

module.exports = socketHandler;
