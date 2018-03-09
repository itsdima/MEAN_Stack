const express = require("express");

const path = require("path");

const session = require('express-session');

const app = express(); 
const bodyParser = require("body-parser");

app.use(session({secret: 'anything'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

// app.post('/process', function(req, res){
// 	req.session.name = req.body.name;
// 	req.session.location = req.body.Location; 
// 	req.session.language = req.body.Language; 
// 	req.session.comment = req.body.comment;
// 	res.redirect('/result');
// });


var server = app.listen(8000, function(){
	console.log('listening');
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log('client is connected: ', socket.id);
	socket.on('posting_form', function(data){
		console.log('button has been clicked! ' + data.name);
		var random = Math.floor(Math.random()*1000 + 1);
		socket.emit('updated_message', {name: data.name, location: data.location, language: data.language, comment: data.comment});
		socket.emit('random_numer', {random: random});
	});
})