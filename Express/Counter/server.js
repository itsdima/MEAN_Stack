var express = require("express");

var path = require("path");

var app = express(); 
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// app.user(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('main');
})


