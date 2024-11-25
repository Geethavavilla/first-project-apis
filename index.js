// let http=require("http");
// http.createServer((req,res)=>{
//     res.write("Hi Everyone");
//     res.end();
// }).listen(4000);

//import express
let express=require("express");
//import cors
let cors=require("cors");
//import db_con.js
let db_con=require("./db_con");
//import bodyparser
let bodyparser=require("body-parser");
//import express-formidable
let formidable=require("express-formidable");

//create object for express
let app=express();

//add port
app.listen(4001);
//use cors
app.use(cors());
//use bodyparser
app.use(bodyparser.urlencoded({extended:false}));
//use express-formidable
app.use(formidable());

//create get api
app.get("/geetha",async(req,res)=>{
    res.write("welcome to Express API");
    res.end();
})

//student
//create get api
app.get("/student",async(req,res)=>{
    let data=await db_con.getStudentData();
    res.write(JSON.stringify(data));
    res.end();
})

//orders
app.get("/orders",async(req,res)=>{
    let data=await db_con.getOrdersData();
    res.write(JSON.stringify(data));
    res.end();
})

//employee
app.get("/employee",async(req,res)=>{
    let data=await db_con.getEmployeeData();
    res.write(JSON.stringify(data));
    res.end();
})

//product
app.get("/product",async(req,res)=>{
    let data=await db_con.getProductData();
    res.write(JSON.stringify(data));
    res.end();
})

//allproducts
app.get("/allproducts",async(req,res)=>{
    let data=await db_con.getAllproductsData();
    res.write(JSON.stringify(data));
    res.end();
})

//registartion
app.post("/registration",async(req,res)=>{
    let data=await db_con.saveRegistrationData(req.body.fullName,req.body.email,req.body.phoneNumber,req.body.password);
    res.redirect("http://localhost:3000/login");
    // res.write(JSON.stringify(data));
    res.end();
})


//usedata
app.get("/userdata",async(req,res)=>{

    let data=await db_con.getUserData();
    // res.redirect("http://localhost:3000");
    res.write(JSON.stringify(data));
    res.end();

})

//post wishlist
app.post("/addtowishlist",async(req,res)=>{
    let data=await db_con.saveWishlistData(req.body.product_id);
    res.redirect("http://localhost:3000/wishlist")
    // res.write(JSON.stringify(data));
    res.end();
})

//get wishlist
app.get("/getwishlist",async(req,res)=>{
    let data=await db_con.getWishlistData();
    // res.redirect("http://localhost:3000");
    res.write(JSON.stringify(data));
    res.end();

})

//create post api for user update
app.post("/updateuser",async(req,res)=>{
    let data=await db_con.updateUserData(req.body.fullName,req.body.email,req.body.phoneNumber,req.body.password,req.body.id);
    res.redirect("http://localhost:3000/login");
    res.end();
})

//create post api for saving product
app.post("/saveproduct",async(req,res)=>{
    let data=await db_con.saveProductData(req.fields.product_name,req.fields.new_price,req.fields.old_price,req.fields.offer,req.fields.product_image);
    res.end();
})