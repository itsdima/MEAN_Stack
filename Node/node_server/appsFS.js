var http = require('http');

var fs = require('fs');



var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/html'});
		var msg = '404: No page exists!';
		res.end(msg);
	}
});

server.listen(3000, 'localhost');
console.log('listening to port 3000');