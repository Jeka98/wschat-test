const express = require('express');
const socket = require('socket.io');

const port = 9090;
const app = express();

app.use(express.static('public'));

const server = app.listen(port, () => {
  console.log('server is listening on port 9090');
});

const io = socket(server);

io.on('connection', (socket) => {
  //console.log(`Socket connection made ${socket.id}`);
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });
});
