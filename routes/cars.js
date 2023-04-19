
const express =require('express');
const router=express.Router();
const {deletCar} =require("../controller/carControler")
let car=[
    {id:1,name:'A'},
    {id:2,name:'B'},
    {id:3,name:'C'},
]
// static api
    router.get("/cars",(req,res)=>{
    return res.send(car);
})
// dynamic api
// : id----> paramtere

router.get('/cars/:id',(req,res)=>{
    const {id}=req.params
  car=  car.find((data)=> (data.id===Number(id)))
  if(!car){res.status(404).send('car id is not avilable')}
    return res.send(car)
})


// create data POST
router.post('/cars',(req,res)=>{
    const {name}=req.body
if(!name){res.status(404).send("name is not prestent")}
    const newcar={
        id:car.length+1,
        name,
    };
    car.push(newcar)
  return  res.status(201).send(car)
  

});


// update(PUT-->)

router.put('/cars/:id',(req,res)=>{
    const {name}=req.body
    if(!name){res.status(404).send("this name is not prestent")}
    const {id}=req.params
    const car=car.find((data)=>data.id===Number(id))
    if(!car){return res.status(404).send('car data is not found')}
    car.name=name
    return res.status(200).send(car)
});


router.delete('/cars/:id',deletCar)
module.exports=router;


// crud=> create read update delete=> post,get,put,delete