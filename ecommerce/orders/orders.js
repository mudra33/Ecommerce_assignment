const express = require("express");
const app = express();

//customer id '
//book id 
//gotdate

const mongoose = require("mongoose");


require('./controllers/ordersController.js')(app);

//mongoose.connect("mongodb+srv://mudra:<mudra>@cluster0.7scho.mongodb.net/<productsservice>");

let uri = 'mongodb+srv://mudra:mudra@cluster0.7scho.mongodb.net/ordersservice';


//mongoose.Promise = global.Promise

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true},  (err, db) => {
   // handle db
   console.log("Database is connected");
});

app.listen(7777,() => {
    console.log("This is the orders service");
})