//install express
const express = require('express');
const app = express();
//install ejs
const ejsLint = require('ejs-lint');
app.set('view engine', 'ejs');
//install mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quoting_dojo');//come back and add database name after localhost/
//allows form data to be turned into object to use on the server side
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
//install moment to manipulate data-time
const moment = require('moment');
//set paths
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
//creatign our DB model
const QuoteSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1, maxlength: 100},
	quote: {type: String, required: true, minlength: 1}},
	{timestamps: true});
//create a new instance of quote collection
mongoose.model('Quote', QuoteSchema);
//store this collection in a variable to use later 
var Quote = mongoose.model('Quote');

//create routes
app.get('/', function(req, res){
	res.render('index');
});

app.post('/process', function(req, res){
	console.log('i am in process');
	//save the info from the form into a variable of a Quote instance 
	var newQuote = new Quote(req.body);
	//save the new info into database, it will not be added unless you save
	newQuote.save(function(err){
		//check if the schema returned any errors after validations
		if(err){
			console.log(err);
			res.render('index', {errors: newQuote.errors});
		}
		//if no errors, the quote processed and we redirect to success page
		else{
			console.log('successfully added');
			res.redirect('/quotes');
		}
	});
});

app.get('/quotes', function(req, res){
	Quote.find({}, function(err, quotes){
	//if you skip to quotes without adding any quotes, the db wont find any quotes and return err
	if(err){
		res.render('quotes', {errors: Quote.errors, moment: moment})
	}
	else{
		//easier to access all quotes by storing in array -- not necessary
		var allQuotes = []; 
		for(let i = 0; i< quotes.length; i++){
			allQuotes.push(quotes[i]);
		}
		//pass all quotes and the time-manipulator(moment) to the page and render
		res.render('quotes', {quotes: allQuotes, moment: moment});
	}
	});
});

//run the server 
app.listen(8000, function(){
	console.log('listening on port 8000');
});

