// Create web server
const express = require('express');
const app = express();
// Create a server
const http = require('http');
const server = http.createServer(app);
// Create socket.io
const socketIo = require('socket.io');
const io = socketIo(server);
// Create a port
const port = 3000;
// Create a path
const path = require('path');
// Create a public path
const publicPath = path.join(__dirname, 'public');
// Use express to serve static files
app.use(express.static(publicPath));
// Listen to the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Create a connection
io.on('connection', (socket) => {
  // When the server receives a message, it sends it to all clients
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});