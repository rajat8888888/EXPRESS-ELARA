

const express =require('express')
const app=express();
const cars=require("./routes/cars")
// nodemon is updating without restarting

app.use(express.json())
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