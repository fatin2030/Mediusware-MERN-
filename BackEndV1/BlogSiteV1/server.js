// const express = require('express');
// const connectDB = require('./db');
// const path = require('path');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware to parse JSON
// // app.use(express.json({ extended: false }));
// app.use(express.json()); // Middleware to parse JSON

// app.use('/uploads', express.static(path.join(__dirname, './Public/uploads')));

// // Define routes
// app.use('/api', require('./Routes/usersRoute'));
// app.use('/api', require('./Routes/postsRoute'));

// // Set the PORT to either the environment variable PORT or 3000
// const PORT = 3000;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

const express = require('express');
const connectDB = require('./db');
const path = require('path');
const cors = require('cors');
const http = require('http'); // Required to create the HTTP server
const socketIo = require('socket.io'); // Required for Socket.IO
const socketHandler = require('./socket'); // Socket logic



const app = express();

// Create an HTTP server to use with both Express and Socket.IO
const server = http.createServer(app);

// Initialize Socket.IO and attach it to the HTTP server
const io = socketIo(server);

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json()); // Middleware to parse JSON

app.use(cors());

// Or specify specific origins
app.use(cors({
  origin: 'http://localhost:3001', // Allow your frontend origin
  methods: ['GET', 'POST'], // Specify allowed methods if needed
  credentials: true,         // Allow cookies if needed
}));

// Serve static files (e.g., profile pics)
app.use('/uploads', express.static(path.join(__dirname, './Public/uploads')));

// Define routes
app.use('/api', require('./Routes/usersRoute'));
app.use('/api', require('./Routes/postsRoute'));
app.use('/api', require('./Routes/chatRoute'));

// Set up Socket.IO handlers (pass the `io` instance)
socketHandler(io);

// Set the PORT to either the environment variable PORT or 3000
const PORT = 3000;

// Start the HTTP server (not `app.listen`, but `server.listen`)
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
