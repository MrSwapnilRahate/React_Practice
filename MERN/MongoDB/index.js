// npm i init
// npm i express  
// npm i mongoose  


const mongoose = require("mongoose");
const express = require("express");
const { connect, connection } = require("mongoose");

const app = express();
app.use(express.json());

const dbURL = "mongodb+srv://swapnilrahate1998:3hq7897R7ORmuPhL@cluster0.4uzpdus.mongodb.net/";

// connect to DB  
mongoose.connect(dbURL).then(function (connection){
    // console.log("Connected to MongoDB:", connection);
    console.log("Connected to MongoDB:");
}).catch(function(err){
    console.log("error:", err);
});

// create a schema
// Ecommerce
// Entity - Product, seller, user, reviews, payment, category, order  
// Schema - a schema in mongoDB defines the structure of data for an entity.
// modal -  It is an instance of schema- and represent collection of document in the DB that adhere to the schema structure.

// create a schema
/*
    "product_name:" "Iphone 19",
    "product_price:" "$2000",
    "isInStock": true,
    "category": "Phone",
    "password": "12345678",
    "confirmPassword": "12345678"
*/
const productSchema = new mongoose.Schema({
  product_name:{
    type: String,
    required: true, 
  },
  product_price:{
    type: String,
    required: true,
  },
  isInStock:{
    type: Boolean,
    required: true,
  },
  category:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
    minLength: 8,
    validate: {
        validator: function () {
            return this.password == this.confirmPassword;
        },
        message: "Password and confirm password should be same",
    }
  },

});

const productModal = mongoose.model("Products", productSchema);

app.post("/app/products", async function(req, res){
    const body = req.body;
    console.log(body);

    const product = await productModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        category: body.category,
        isInStock: body.isInStock,
        password: body.password,
        confirmPassword: body.confirmPassword,
    });

    console.log("product: ", product);
    return res.status(201).json({message: "Product created Successfully"});
})

app.get("/app/products", async function(req, res){
    const allProducts = await productModel.find();

    console.log("all products: ", allProducts);
    return res.status(201).json(allProducts);
})

app.listen(3000, function(){
    console.log("server is running");
})