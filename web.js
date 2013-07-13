var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(100); 

app.get('/', function(request, response) {
  var len = buffer.write(fs.readFileSync('./index.html','utf-8'));
  response.send(buffer.toString('utf-8'),0,len);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
