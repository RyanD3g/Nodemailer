const express = require("express");
const app = express();
const routes = require('../routes');
const path = require('path');
const port = 3030;
const dotenv = require('dotenv');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/public', express.static('public'));
app.use(routes);

dotenv.config();

app.listen(port, ()=>{
    console.log(path.resolve(__dirname, 'views'));
})
