function router(app) 
{
    const mongoose = require("mongoose");
    require("../Order")
    
    const Order = mongoose.model("Order")

    const bodyParser = require("body-parser");
    app.use(bodyParser.json());
    
    app.get('/', async (req,res) => {
        res.send("this is our main endpoint ");
    })
    
    //create funct
    app.post("/order", (req,res) => {
        //this is our create functionality
        var neworder = {
            CustomerID : req.body.CustomerID,
            ProductID : req.body.ProductID,
            orderDate : req.body.orderDate
        }
        
                //create  a new product
            var order = new Order(neworder)
    
            order.save().then(() => {
                console.log("New Order Created")
            })
            
        console.log(req.body)
        res.send("order create")
    }
    )
            
    app.get("/orders",(req,res) => {
    
        Product.find().then((orders) => {
            res.json(orders)
        }
        )
    })

}

module.exports = router;