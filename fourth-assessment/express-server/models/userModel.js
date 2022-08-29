const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://admin:admin@cluster0.exlrc9x.mongodb.net/?retryWrites=true&w=majority").then((res) => {
    console.log('connected to db')
}).catch((e) => {
    console.log('error in connection', e)
});

const userModel=mongoose.model("myDB",{
    fname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,   
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        default:"user",
        enum:['user','admin'],
        required:true
    },
    address: {
        type: String,
    }, 
    img: {
        type: String,
    }
})
module.exports=userModel