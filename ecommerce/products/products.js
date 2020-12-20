    
    const express = require("express");
    const app = express();


const mongoose = require("mongoose");

require("./Product")
const Product = mongoose.model("Product")

require('./controllers/productsController.js')(app);

//mongoose.connect("mongodb+srv://mudra:<mudra>@cluster0.7scho.mongodb.net/<productsservice>");

let uri = 'mongodb+srv://mudra:mudra@cluster0.7scho.mongodb.net/productsservice';


//mongoose.Promise = global.Promise

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true},  (err, db) => {
   // handle db
   console.log("Database is connected");
});



app.listen(3000,() => {
    console.log("This is the product service");
})