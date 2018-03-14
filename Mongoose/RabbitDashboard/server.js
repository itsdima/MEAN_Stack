const express = require('express');
const app = express();

const ejsLint = require('ejs-lint');
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rabbit_dash');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const moment = require('moment');

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));

const RabbitSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1, maxlength: 255},
	type: {type: String, required: true, minlength: 1, maxlength: 255},
	color: {type: String, required: true, minlength: 1}},
	{timestamps: true});

mongoose.model('Rabbit', RabbitSchema);
var Rabbit = mongoose.model('Rabbit');

app.get('/', function(req, res){
	Rabbit.find({}, function(err, rabbits){
	if(err){
		res.render('index', {errors: Rabbit.errors, moment: moment})
	}
	else{
		var allRabbits = []; 
		for(let i = 0; i< rabbits.length; i++){
			allRabbits.push(rabbits[i]);
		}
		res.render('index', {rabbits: allRabbits, moment: moment});
	}
	});
});


app.get('/rabbits/new', function(req, res){
	res.render('new');
});

app.post('/rabbits', function(req, res){
	var newRabbit = new Rabbit(req.body);
	newRabbit.save(function(err){
		if(err){
			console.log(err);
			res.render('new', {errors: newRabbit.errors});
		}
		//if no errors, the quote processed and we redirect to success page
		else{
			console.log('successfully added');
			res.redirect('/');
		}
	})
});

app.get('/rabbits/destroy/:id', function(req, res){
	Rabbit.remove({_id: req.params.id}, function(err){
		if(err){
			console.log(err);
		}
		else{

			res.redirect('/');
		}
	});
});

app.get('/rabbits/edit/:id', function(req, res){
	Rabbit.find({_id: req.params.id}, function(err, rabbit){
		if(err){
			res.render('index', {errors: Rabbit.errors, moment: moment})
		}
		else{
		//pass all rabbits and the time-manipulator(moment) to the page and render
			console.log(rabbit[0].name);
			res.render('update', {rabbit: rabbit, moment: moment});
		}
	})
});

app.get('/rabbits/:id', function(req, res){
	Rabbit.find({_id: req.params.id}, function(err, rabbit){
		if(err){
			res.render('index', {errors: Rabbit.errors, moment: moment})
		}
		else{
			res.render('view', {rabbit: rabbit, moment: moment});
		}
	})
});

app.post('/rabbits/:id', function(req, res){
	console.log('i am here for update');
	Rabbit.update({_id: req.params.id}, {name: req.body.name, type: req.body.type, color: req.body.color}, function(err){	
	if(err){
		res.redirect('/rabbits/'+ req.params.id);
	}
	else{
		res.redirect('/');	
	}
	})
});

app.listen(8000, function(){
	console.log('listening on port 8000');
});