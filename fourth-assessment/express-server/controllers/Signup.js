const express=require('express')
const router=express.Router();
const userModel = require('../models/userModel');
router.post('/signup',(req,res)=>{
    const data=req.body
    const obj=new userModel({
        fname:data.fname,
        email:data.email,
        password:data.password,
        phone:data.phone,
        address: data.address,
        img: data.img
    })
    obj.save().then((result)=>{
        res.send({'msg':'User signup succeeded',"status":true})
    }).catch((e)=>{
        console.log(e)
        res.send({"msg":'some error occured try again',"status":false})
    })
})

module.exports=router