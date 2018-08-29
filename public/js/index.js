var socket = io();

socket.on('connect', function (){
  console.log('Connected to server');

  //------------------------Emit calls ----------------------------


});


//------------------------Receiving calls ----------------------------

socket.on('newMessage', function (msg){
    console.log(`Got msg from server: ${JSON.stringify(msg)}`)
})

socket.on('disconnect', function(){
  console.log('Disconnected from server');
});


