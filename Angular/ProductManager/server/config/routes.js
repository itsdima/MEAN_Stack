const ctrl = require('../controllers/controller');
const path = require('path');

module.exports = (app) => {

    app.post('/product', (req, res) =>{
        ctrl.addProduct(req, res);
    });

    app.get('/product', (req, res) =>{
        ctrl.getAll(req, res);
    });

    app.delete('/product/:id', (req, res) =>{
        ctrl.delete(req, res);
    });

    app.get('/product/:id', (req, res) => {
        ctrl.getOne(req, res);
    });

    app.put('/product/:id', (req, res) => {
        ctrl.update(req, res);
    });

    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}