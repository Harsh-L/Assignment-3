require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const shopping_cart_router = require('./router/shopping_cart_route');

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('shopping-cart.in/', shopping_cart_router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/shopping_cart`); 
})