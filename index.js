var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req,res) {
  res.send('Yo!');
});

app.get('/numMun', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(8080, function() {
  console.log('numbers-game listening on port 8080');
});
