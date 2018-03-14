//install express
const express = require('express');
const app = express();
//install mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/1955API');//come back and add database name after localhost/
//allows form data to be turned into object to use on the server side
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//install moment to manipulate data-time
const moment = require('moment');
var Schema = mongoose.Schema;
//creatign our DB model
const PersonSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4, maxlength: 100}},
	{timestamps: true});

mongoose.model('Person', PersonSchema);
//store this collection in a variable to use later 
var Person = mongoose.model('Person');
//create routes
app.get('/', function(req, res){
	Person.find({}, function(err, all){
		if(err){ console.log(err);}
		else{ res.json(all); }
	});
});

app.get('/new/:name', function(req, res){
	console.log('processing person');
	var newPerson = new Person({name: req.params.name});
	newPerson.save(function(err){
		if(err){
			console.log(err);
		}
		else{
			console.log('successfully added');
			res.redirect('/');
		}
	});
});

app.get('/remove/:name', function(req, res){
	console.log('removing person');
	Person.remove({name: req.params.name}, function(err){
		if(err){console.log(err);}
		else{
			console.log('removed');
			res.redirect('/');
		}
	})
});

app.get('/:name', function(req, res){
	Person.find({name: req.params.name}, function(err, person){
		if(err){ console.log(err);}
		else{ res.json(person); }
	});
});



//run the server 
app.listen(8000, function(){
	console.log('listening on port 8000');
});

