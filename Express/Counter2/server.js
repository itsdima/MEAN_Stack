const express = require("express");

const path = require("path");

const session = require('express-session');

const app = express(); 
const bodyParser = require("body-parser");

app.use(session({secret: 'anything'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	if(req.session.counter == null){
		req.session.counter = 0;
	}
	else{
		req.session.counter += 1;
	}
	res.render('main', {counter: req.session.counter});
});

app.get('/reset', function(req, res){
	req.session.counter = -1;
	res.redirect('/');
});

app.get('/plus2', function(req, res){
	req.session.counter += 1; 
	res.redirect('/');
})

app.listen(8000, function(){
	console.log('listening');
});