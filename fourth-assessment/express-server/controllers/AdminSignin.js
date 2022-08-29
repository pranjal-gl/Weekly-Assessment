const express=require('express')
const router=express.Router()
const userModel = require("../models/userModel");
const jwt=require('jsonwebtoken')
// const cookie=require('cookie-parser')

router.post('/adminsignin',async (req,res)=>{
    const data=req.body
    try{
        const result=await userModel.findOne({email:data.email})
        console.log(result)
        if(result){
            if(result.password===data.password && result.role === "admin"){
                const token = jwt.sign({email:result.email, role:result.role},'jamesbond')
                console.log(token);
                res.cookie('authorizer', token, {httpOnly:true})
                res.send({"msg":'User authenticated',"status":true})
            }
            else{
                res.send({"msg":'check your password, not authenticated',"status":false})
            }
        }
        else{
            res.send({"msg":'the email id does not exists',"status":false})
        }
       
    }
    catch(e){
        res.send({'msg':'some error occured',"status":false})
    }
   
})
module.exports=router