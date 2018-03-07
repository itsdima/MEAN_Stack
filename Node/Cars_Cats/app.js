var http = require('http');

var fs = require('fs');



var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	if(req.url === '/cars'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/views/cars.html').pipe(res);
	}
	else if(req.url === '/stylesheet/style.css'){
		fs.readFile('./stylesheet/style.css', 'utf8', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(contents);
			res.end();
		});
	}
	else if(req.url === '/images/car.jpg'){
		fs.readFile('./images/car.jpg', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(contents);
			res.end();
		});
	}
	else if(req.url === '/images/headshot.jpg'){
		fs.readFile('./images/headshot.jpg', function(errors, contents){
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(contents);
			res.end();
		});
	}
	else if(req.url === '/cats'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/views/cats.html').pipe(res);
	}
	else if(req.url === '/cars/new'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/views/newcar.html').pipe(res);
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/html'});
		var msg = '404: No page exists!';
		res.end(msg);
	}
});

server.listen(7077, 'localhost');
console.log('listening to port 7077');