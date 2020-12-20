const mongoose = require("mongoose");

mongoose.model("Product",{
    title: {
        type : String,
        require : true
    } 
});