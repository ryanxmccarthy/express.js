var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;
var server1 = http.createServer(handleRequest7000);
var server2 = http.createServer(handleRequest7500)

function handleRequest7000(request, response) {
	response.end('<h1>You look nice today</h1>')
};

function handleRequest7500(request, response) {
	response.end('<h1>You look truly wretched today</h1>')
};

server1.listen(PORT1, function() {
	console.log('Port 1 connected')
});

server2.listen(PORT2, function() {
	console.log('Port 2 connected')
});