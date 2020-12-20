function router(app) 
{
    const mongoose = require("mongoose");
    require("../Product")
    const Product = mongoose.model("Product")

    const bodyParser = require("body-parser");
    app.use(bodyParser.json());

    app.get('/', async (req,res) => {
        res.send("this is our main endpoint ");
    })
    
    //create funct
    app.post("/product", (req,res) => {
        //this is our create functionality
        var newproduct = {
            title: req.body.title
        }
        
                //create  a new product
            var product = new Product(newproduct)
    
            product.save().then(() => {
                console.log("New Product Created")
            })
            
        console.log(req.body)
        res.send("product create")
    }
    )
            
    app.get("/products",(req,res) => {
    
        Product.find().then((products) => {
            res.json(products)
        }
        )
    })

}

module.exports = router;