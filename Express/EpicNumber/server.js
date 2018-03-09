const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
const bodyparser = require('body-parser');

app.use(session({secret: 'anything'}));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

var server = app.listen(8000, function(){
	console.log('listening');
});
var io = require('socket.io').listen(server);

var count = 0;
io.sockets.on('connection', function(socket){
	console.log('client is connected: ', socket.id);
	socket.on('count_up', function(){
		count++; 
		io.emit('updated_count', {count: count}); 
	});
	socket.on('reset', function(){
		count = 0; 
		io.emit('newCounter');
	});
});