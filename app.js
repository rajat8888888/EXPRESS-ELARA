

const express =require('express')
const app=express();
const morgan=require("morgan")
const cars=require("./routes/cars")

// nodemon is updating without restarting
// html file pass
app.use(express.static("public"))

app.use(morgan("dev"))
// midlewaire--> req,res,next
// custom midlewaire ,router ,invilt
// app.use(express.json())
// app.use(function(req,res,next){
//     console.log(`req is ${req} res is ${res}`);
//     next() // calling next pipline
//  })



// template engine

app.set("view engine",'pug')
app.set('views',"./views")

// app.get('/',(req,res)=>{
//     return res.render("index",{
//         title:'newton school',
//         message:"welcome to newton school"
//     });
// });
// envoirment----->development,testing,production
console.log("envoirment",app.get("env"));
 

app.use(function aunthenication(req,res,next){
    const {user_id}=req.headers
    if(user_id==="123") return res.status(403).send("invalid")
    else next()

})


 
// app.get('/',(req,res)=>{
//      return res.send("this is main folder")
// })



/**
 * @version: 1.0
 * @path --> /car
 * @rajat8888888
 * @author @rajat
 * @example: http://localhost:3000/cars --->[{id:1,name:'bmw'}]
 */

app.use("./cars",cars)


app.listen(5000,()=>console.log("server is runing at port 5000"));

// crud=> create read update delete=> post,get,put,delete