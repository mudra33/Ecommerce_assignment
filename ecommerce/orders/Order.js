const mongoose = require("mongoose");

mongoose.model("Order",{
    CustomerID: {
        type :  Number,
        required : true
    },
    ProductID: {
        type :  Number,
        required : true
    },
     orderDate: {
        type : Date,
        default: Date.now()
     }
});