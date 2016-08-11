// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain",
  "X-secret-Maggie": "Surprise!"});

  //console.log(request.rawHeaders);
  /*request.on('data', function(chunk){
  	console.log("Received Body Data");
  	console.log(chunk.toString());
  	//var requestInput = JSON.parse(chunk.toString());
  	//response.end(requestInput.data.toUpperCase());
  });*/



  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

