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

app.get('/result', function(req, res){

	res.render('result', {name: req.session.name, location: req.session.location, language: req.session.language, comment: req.session.comment});
});

app.post('/process', function(req, res){
	req.session.name = req.body.name;
	req.session.location = req.body.Location; 
	req.session.language = req.body.Language; 
	req.session.comment = req.body.comment;
	res.redirect('/result');
});

app.get('/back', function(req, res){
	res.redirect('/');
});

app.listen(8000, function(){
	console.log('listening');
});