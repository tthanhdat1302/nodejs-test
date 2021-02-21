var b="b";
console.log(b);

for(let i=0;i<6;i++)
{
    console.log(i);
}

const a=0;
console.log(a);

/*function test(){
    console.log("hello");
}*/

let test=()=>{
    console.log("Hello");
}
test();

let object = {
    name:"alo",
    decreption:123,
    isoK:true
}
console.log(object.name);
console.log(object.decreption);

let array=[1,2,3,4,5,6];
let c = array.filter(function(a){return a>2});
let d = array.map(function(a){return a-2});
let e=array.reduce(function(a,b){return a-b});
console.log(c);
console.log(d);
console.log(e);

let f=3;
if(f>2){
    console.log(f)
}
else{
    console.log("nho hon")
}

f>3?console.log(f):console.log("nho hon")

const express=require("express");
const app=express();
const http=require("http");
const server=http.createServer(app);

const homeRouter=require("./Router/Home");
app.use("/homepage",homeRouter);

app.get("/",function(req,res,next){
    res.send("hello");
});
app.get("/test",function(req,res,next){
    res.send("test nodejs")
});
app.post("/post",function(req,res,next){
    const name=req.body;
    console.log(name);
    res.send("hello")
})

const port=3000;
server.listen(3000,function(err){
    if(err)
    console.log(err)
    else console.log("your app is on 3000")
});

const mysql = require('mysql');

const config = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dat130299"
});

config.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// config.query("CREATE DATABASE nodejs",function(err){
//     if(err) throw err;
//     console.log("Database created!")
// })

// config.query("USE nodejs",function(err){
//     if(err) throw err;
//     console.log("Used!");
//     config.query("Create table test(NAME NVARCHAR(255))",function(err){
//         if(err) throw err;
//         console.log("Table created!")
//     })
// })

// config.query("use nodejs");
// config.query("Create table user(name nvarchar(255))",function(err){
//     if(err) throw err
//     console.log("Table created!")
// })
// config.query("INSERT into user(name) VALUES('Tran Thanh Dat')",function(err){
//     if(err) throw err
//     console.log("Inserted!")
// })
config.query("use nodejs");
config.query("SELECT * FROM user",function(err,result){
    if(err) throw err
    app.get("/data",function(req,res,next){
        res.send(result);
    })
})

