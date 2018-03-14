//install express
const express = require('express');
const app = express();
//install mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restfulapi');//come back and add database name after localhost/
//allows form data to be turned into object to use on the server side
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//install moment to manipulate data-time
const moment = require('moment');
var Schema = mongoose.Schema;
//creatign our DB model
const RestfulSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 1, maxlength: 100},
	description: {type: String, default: ''},
	completed: {type: Boolean, default: false}},
	{timestamps: true});

mongoose.model('Restful', RestfulSchema);
//store this collection in a variable to use later 
var Restful = mongoose.model('Restful');
//create routes
app.get('/restfulapi', function(req, res){
	Restful.find({}, function(err, all){
		if(err){ console.log(err);}
		else{ res.json(all); }
	});
});

app.post('/restfulapi', function(req, res){
	console.log('processing Restful');
	var newRestful = new Restful(req.body);
	newRestful.save(function(err){
		if(err){
			console.log(err);
		}
		else{
			console.log('successfully added');
			res.redirect('/restfulapi');
		}
	});
});

app.put('/restfulapi/:id', function(req, res){
	Restful.update({_id: req.params.id}, req.body , function(err){
		if(err){console.log(err);}
		else{ 
			res.redirect('/restfulapi');
		}
	})
});

app.delete('/restfulapi/:id', function(req, res){
	console.log('removing Restful');
	Restful.remove({_id: req.params.id}, function(err){
		if(err){console.log(err);}
		else{
			console.log('removed');
			res.redirect('/restfulapi');
		}
	})
});

app.get('/restfulapi/:id', function(req, res){
	Restful.find({_id: req.params.id}, function(err, restful){
		if(err){ console.log(err);}
		else{ res.json(restful); }
	});
});



//run the server 
app.listen(8000, function(){
	console.log('listening on port 8000');
});

