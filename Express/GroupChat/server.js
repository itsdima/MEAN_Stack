const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyparser = require('body-parser');

const app = express();

app.use(session({secret: 'anything'}));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	req.session.name = '';
	res.render('index');
});

var server = app.listen(8000, function(){
	console.log('listening');
});
var io = require('socket.io').listen(server);
users = [];
connections = [];
messages = [];
io.sockets.on('connection', function(socket){
	//connect
	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);
	//send message
	socket.on('send', function(data){
		console.log('recieved');
		messages.push({msg: data, user: socket.username});
		io.emit('append', messages);
		console.log('sent to append')
	});
	//disconect
	socket.on('disconnect', function(data){
		users.splice(users.indexOf(socket.username), 1);
		updateUserNames();
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconected: %s sockets connected', connections.length);
	});

	//page loads 
	socket.on('page load', function(){
		socket.emit('load', messages);
	});

	//add new user
	socket.on('new user', function(data, callback){
		if(users.indexOf(data) != -1){
			callback(false);
		}
		else{
			callback(true);
			socket.username = data; 
			users.push(socket.username);
			updateUserNames();
			
		}

	});
	function updateUserNames(){
		io.emit('get users', users);
	};

});