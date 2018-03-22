const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
const Product = mongoose.model('Product');
mongoose.connect('mongodb://localhost/product');

module.exports = {
    addProduct: (req, res) => {
        var newProduct = new Product(req.body);
        newProduct.save((err)=>{
            if(err){
                res.json(err);
            }
            else{
                console.log('succesfully added product');
                res.json({success: 'successfull add'});
            }
        });
    },

    getAll: (req, res) => {
        Product.find({}, null, {sort: {title: 1}}, (err, all)=> {
            if(err){ console.log(err);}
            else{
                res.json(all);
            }
        });
    },

    delete: (req, res) =>{
        console.log('removing product');
        Product.remove({_id: req.params.id}, (err)=>{
            if(err){console.log(err);}
            else{
                console.log('removed');
                res.json({success: 'success'});
            }
        });
    },

    getOne: (req, res) => {
        Product.find({_id: req.params.id}, (err, one) => {
            if(err){console.log(err);}
            else{
                res.json(one);
            }
        });
    },

    update: (req, res) => {
        Product.update({_id: req.params.id}, req.body, {runValidators: true}, (err, data) => {
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
    }
}