var repeater = require('./repeater');
// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.write(repeater.repeat("Hello World!"));
  response.end();
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:3000/");