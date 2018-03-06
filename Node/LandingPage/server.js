var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	console.log('request was made: ' + request.url);
	if(request.url === '/'){
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(response);
	}
	else if(request.url === '/ninjas'){
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/ninjas.html').pipe(response);
	}
	else if(request.url === '/dojos/new'){
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/dojos.html').pipe(response);
	}
	else{
		response.writeHead(404);
		response.end('Path not found! check your english!');
	}
});


server.listen(6789);
console.log('listeing on server 6789');