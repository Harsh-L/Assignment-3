var router = require('express').Router()
const productModel = require('../models/product')
const bodyParser = require("body-parser");

router.get('/', (req, res) => {
    productModel.find((err,data)=> {
        if(!err) {
            res.json(data);
        }
    })
})

router.post('/insert', async (req,res) => {
    productModel.create(req.body, (err,data) => {
        if(!err) {
            return err;
        }else {
            res.json(data);
        }
    })
})

router.get('/update/:id', (req,res) => {
    productModel.findOne(req.params.id, req.body, {new: true}, (err,) => {
        if(!err){
            res.json(data)
        } else {
            console.log('Error Cannot find product');
        }
    })
})

router.put('/update/:id', (req,res) => {
    productModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
        if(!err){
            res.json(data);
        } else {
            console.log('Error Cannot update product');
        }
    });
    
})

router.delete('/delete/:id', (req,res) => {
        productModel.findByIdAndRemove({_id:req.params.id}, (err,product)=>{
            console.log(product);
            res.send(product);
        })
})