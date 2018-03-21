const ctrl = require('../controllers/controller');
const path = require('path');
//wont need the following two once i use controller
const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = (app) => {
    app.get('/author', (req, res) =>{
        Author.find({},null,{sort: {Name: 1}}, (err, all)=>{
            if(err){ console.log(err);}
            else{ res.json(all);}
        });
    });

    app.post('/author', (req, res)=>{
        var newAuthor = new Author(req.body);
        newAuthor.save((err)=>{
            if(err){
                var message = 'Name must be at least 3 Characters!'
                res.json({error: message});
            }
            else{ 
                console.log('successfully added')
                res.json({success: 'Succesfull add'})
                // res.redirect('/author');
            }
        });
    });

    app.delete('/author/:id', (req, res)=>{
        console.log('removing author');
        Author.remove({_id: req.params.id}, (err)=>{
            if(err){console.log(err);}
            else{
                console.log('removed');
                res.json({success: 'success'});
            }
        });
    });

    app.get('/author/:id', (req, res)=>{
        Author.find({_id: req.params.id}, (err, author)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json(author);
            }
        });
    });

    app.put('/author/:id', (req, res)=>{
        Author.update({_id: req.params.id}, req.body, {runValidators: true}, (err, data)=>{
            if(err){
                var message = 'Name must be at least 3 characters!'
                res.json({error: message});
            }
            else{
                res.json(data);
            }
        });
    });
}