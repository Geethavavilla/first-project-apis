//Student 
//import mysql module
let mysql=require("mysql2");
//create connection
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin$123",
    database:"student"
});
//create function to start connection
function startConnection(){
    con.connect((err)=>{
        if (err) throw err;
        console.log("connected");
    })
}
//use connection
async function getStudent(){
    //start connection
    startConnection();
    let data=await con.promise().query("select * from Std_data");
    return data[0];
}
//we need to export above function



//orders

let con1=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin$123",
    database:"orders"
})
function startConnection1(){
    con1.connect((err)=>{
        if(err) throw err;
        console.log("connected");
    })
}
async function getOrders(){
    startConnection1();
    let data=await con1.promise().query("select * from shopping");
    return data[0];
}



//employee
let con2=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin$123",
    database:"employee"
})
function startConnection2(){
    con2.connect((err)=>{
        if (err) throw err;
        console.log("connected");
    })
}
async function getEmployee(){
    startConnection2();
    let data=await con2.promise().query("select * from emp_table");
    return data[0];
}


///products
let con3=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin$123",
    database:"farmart"
})
function startConnection3(){
    con3.connect((err)=>{
        if (err) throw err;
        console.log("connected");
    })
}
async function getproduct(){
    startConnection3();
    let data=await con3.promise().query("select * from product_data");
    return data[0];
}

//allproducts
async function getAllproducts(){
    startConnection3();
    let data=await con3.promise().query("select * from all_products");
    return data[0];
}

//create a function for saving registered data
//registration
async function saveRegistration(fullName,email,phoneNumber,password){
    startConnection3();
    let data=await con3.promise().query(`insert into registration(fullName,email,phoneNumber,password)values('${fullName}','${email}','${phoneNumber}','${password}')`);
    return data[0];
}

//create get api for registered data
async function getUser(){
    startConnection3();
    let data=await con3.promise().query("select * from registration");
    return data[0];

}

//create get api for wishlist data
async function saveWishlist(product_id){
    startConnection3();
    let data=await con3.promise().query(`insert into wishlist_data(product_id)values(${product_id})`);
    return data[0];
}
//create get api for save wishlist data
async function getWishlist(){
    startConnection3();
    let data=await con3.promise().query("select offer,product_name,new_price,old_price from product_data as p inner join wishlist_data as w on p.id=w.product_id ");
    return data[0];
}

//create get api for edit data
async function updateUser(fullName,email,phoneNumber,password,id){
    startConnection3();
    let data=await con3.promise().query(`update registration set fullName='${fullName}',email='${email}',phoneNumber=${phoneNumber},password='${password}' where id=${id}; `);
    return data[0];
}

//create function for saving product data
async function saveProduct(product_name,new_price,old_price,offer,product_image){
    startConnection3();
    let data=await con3.promise().query(`insert into product_data(product_name,new_price,old_price,offer,product_image)values('${product_name}','${new_price}','${old_price}','${offer}','${product_image}')`);
    return data[0];
}
//export functions
module.exports={
    getEmployeeData:async() => getEmployee(),
    getStudentData:async() =>getStudent(),
    getOrdersData:async() =>getOrders(),
    getProductData:async()=>getproduct(),
    getAllproductsData:async()=>getAllproducts(),
    getUserData:async()=>getUser(),
    getWishlistData:async()=>getWishlist(),
    saveRegistrationData:async(fullName,email,phoneNumber,password)=>saveRegistration(fullName,email,phoneNumber,password),
    saveWishlistData:async(product_id)=>saveWishlist(product_id),
    updateUserData:async(fullName,email,phoneNumber,password,id)=>updateUser(fullName,email,phoneNumber,password,id),
    saveProductData:async(product_name,new_price,old_price,offer,product_image)=>saveProduct(product_name,new_price,old_price,offer,product_image)
}

