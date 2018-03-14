//install express
const express = require('express');
const app = express();
//install ejs
const ejsLint = require('ejs-lint');
app.set('view engine', 'ejs');
//install mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Message_board');//come back and add database name after localhost/
//allows form data to be turned into object to use on the server side
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
//install moment to manipulate data-time
const moment = require('moment');
var Schema = mongoose.Schema;
//set paths
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
//creatign our DB model
const PostSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4, maxlength: 100},
	text: {type: String, required: true, minlength: 1},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]},
	{timestamps: true});

const CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4, maxlength: 100},
	text: {type: String, required: true, minlength: 1},
	_post: {type: Schema.Types.ObjectId, ref: 'Post'}},
	{timestamps: true});
//create a new instance of quote collection
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
//store this collection in a variable to use later 
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

//create routes
app.get('/', function(req, res){
	Post.find({})
	.populate('comments')
	.exec(function(err, posts){
		if(err){ console.log(err)}
		else{
			console.log(posts[0].comments);
			res.render('index', {posts: posts});
		}
	});

});

app.post('/processPost', function(req, res){
	console.log('processing post');
	//save the info from the form into a variable of a Quote instance 
	var newPost = new Post(req.body);
	//save the new info into database, it will not be added unless you save
	newPost.save(function(err){
		//check if the schema returned any errors after validations
		if(err){
			console.log(err);
			res.render('index', {errors: newPost.errors});
		}
		//if no errors, the quote processed and we redirect to success page
		else{
			console.log('successfully added');
			res.redirect('/');
		}
	});
});

app.post('/processComment/:id', function(req, res){
	console.log('processing comment');
	Post.findOne({_id: req.params.id}, function(err, post){
		var newComment = new Comment(req.body);
		newComment._post = req.params.id;
		post.comments.push(newComment);
		newComment.save(function(err){
			post.save(function(err){
				if(err) {console.log(err);}
				else{ res.redirect('/'); }

			});
		});
	});
});

//run the server 
app.listen(8000, function(){
	console.log('listening on port 8000');
});

