let car=[
    {id:1,name:'A'},
    {id:2,name:'B'},
    {id:3,name:'C'},
]
function deletCar(req,res){
    const{id}=req.params
    if(!id){res.status(404).send('data is not perovided')}
    const car=car.find((data)=>data.id===Number(id))
    const index=car.indexOf(car)
    car.splice(index,1)
    return res.status(200).send(car)
}
module.exports={
    deletCar,
}