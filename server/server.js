const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {
  console.log('New user connected');
//------------------------Emit calls ----------------------------
socket.emit('newMessage', {
    from:"Admin",
    text:"Welcome to the chat app.",
    createdAt: new Date().getTime()
}) 

socket.broadcast.emit('newMessage',{
    from:"Admin",
    text:"New user joined",
    createdAt: new Date().getTime()
})

//------------------------Receiving calls ----------------------------
socket.on('createMessage', function(msg){
    console.log('Got Message from client', msg); 
    io.emit('newMessage', {
        from:msg.from,
        text:msg.text,
        createdAt: new Date().getTime()
    })
})

socket.on('disconnect', function (){
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});