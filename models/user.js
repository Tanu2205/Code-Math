const mongoose=require("mongoose");
const schema=mongoose.Schema;
const u='mongodb://127.0.0.1:27017/new';

const passportlmongoose=require("passport-local-mongoose")
const userschema=new schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        
    }
})
userschema.plugin(passportlmongoose);
module.exports=mongoose.model("user",userschema)
