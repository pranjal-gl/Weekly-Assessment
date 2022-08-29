const express=require('express');
const app=express();
const bp=require('body-parser');
app.use(bp.json());
const cors=require('cors');
app.use(cors({origin:'http://localhost:3000',credentials:true}));
const cookieparser=require('cookie-parser');
app.use(cookieparser());

const userSignup = require('./controllers/Signup');
const userSignin = require('./controllers/UserSignin');
const adminSignup = require('./controllers/AdminSignup');
const adminSigin = require('./controllers/AdminSignin');
const userModel = require('./models/userModel')

app.use('/', userSignup);
app.use('/', userSignin);
app.use('/', adminSignup);
app.use('/', adminSigin);

//CRUD operations
// use existing one for creation
app.use('/users', (req, res)=>{
    userModel.find({}, (err, data)=>{
        res.send(data);
    })
})
app.use('/update:email', (req, res)=>{
    console.log(req.params);
    // to be implemented
    userModel.findOneAndUpdate(req.params, {"fname" : "new Carry"}, (err, result)=>{
        res.send(result);
    })
})
app.use('/delete:email', (req, res)=>{
    console.log(req.params);
    // to be implemented
    userModel.findOneAndRemove(req.params, (err)=>{
        console.log(err);
    })
})

app.listen(3001,()=>console.log('server started at 3001'))