var router = require('express').Router()
const adminModel = require('../models/admin')
const sellerModel = require('../models/seller')
const productModel = require('../models/product')
const userModel = require('../models/user')
const {sign, verify} = require('../libs/authenticate');
const { request } = require('express')

router.get('/', async (req,res) => {
    try {
        const data = await productModel.find();  
        if(data){
            res.send(data);
        }
        else{
            res.status(404).send('No Data Found');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong');
    }
})

router.get('/login/user', async  (req,res) => {
    // load login form
})

router.post('/login/user', async (req,res) => {
    let {username, password} = req.body

    if(username && password) {
        let response = await userModel.find({username:username, password:password});
        if(response.length === 1) {
            return res.json(sign({ username }))
        } else {
            return res.status(401).json('Invalid username or password')
        }
    } else {
        return res.status(401).json('Please provide username and password')
    }
})

router.get('/login/seller', async  (req,res) => {
    // load login form
})


router.post('/login/seller', async (req,res) => {
    let {username, password} = req.body
    
    if(username && password) {
        let response = await sellerModel.find({username: username, password: password});
        if(response.length === 1){
            return res.json(sign({ username }))
        } else {
            return res.status(401).json('Invalid username or password')
        }
    } else {
        return res.status(401).json('Please provide username and password')
    }
})

router.post('/logout', (req,res) => {
    req.header.authorization = '';
    // redirecting to login
})

router.get('/details/:id', async (req,res) => {

})

router.get('/insert', (req,res) => {
    
})

router.post('/insert', async (req,res) => {
    try {
        const data = req.body;
        const product = new productModel({...data});
        await product.save();
        res.redirect('/')
    } catch (error) {
        res.status(500).send('internal server error')
    }
})

router.get('/update/:id', async (req,res) => {

})

router.put('/update/:id', async (req,res) => {
    try {
        await productModel.findByIdAndUpdate({"_id": req.params.id}, req.body, {new: true}, (err, product) => {
            if (err) return res.status(500).send("There was a problem updating.");  
            res.status(200).send(book);
        });
        res.redirect('/')
    } catch (error) {
        res.status(500).send('internal server error')
    }
})

router.get('/delete/:id', async (req,res) => {
    
})

router.delete('/delete/:id', async (req,res) => {
    productModel.findByIdAndRemove({_id:req.params.id}, (err,product)=>{
        console.log(product);
        res.send(product);
    })
})