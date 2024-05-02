const mongoose=require("mongoose");
const express=require("express");
const app=express();
const dotenv = require('dotenv')
dotenv.config()
require('dotenv').config();
const initdata=require("./course_data.js");
const c=require("../models/courses.js");
const dbUrl=process.env.ATLASDB_URL;

var session = require('express-session');
const MongoStore = require('connect-mongo');
const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    }
})
const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true
}

app.use(session(sessionOptions));
async function main(){
    await mongoose.connect(dbUrl);
}
main().then(()=>{
    console.log("Connected to db");
})
const initDB=async ()=>{
    await c.insertMany(initdata.data);
    console.log("Data was initialised");
}
initDB();
