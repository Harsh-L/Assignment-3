require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();


app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/shopping_cart`); 
})