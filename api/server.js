require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const categories = require('./router/categories');
const notes = require('./router/notes');
const app = express();

app.listen(5000);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(parser.json());
app.use('/categories', categories);
app.use('/notes', notes);

mongoose.connect(process.env.MONGOOSE_CONN, 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});