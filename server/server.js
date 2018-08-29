const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath))

app.get('/', function(req, res){
    res.send('hello world');
  });



app.listen(port, ()=>{
    console.log(`Server is up on ${port}`);
}) 