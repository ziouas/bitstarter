var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(100); 

app.get('/', function(request, response) {
  var txt = fs.readFileSync('./index.html','utf-8');
  var len = txt.length;
  buffer.write(txt,0,len);
  response.send(buffer.toString('utf-8'),0,len);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
