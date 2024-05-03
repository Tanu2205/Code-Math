const express=require("express");
const app=express();
const dotenv = require('dotenv')
dotenv.config()
require('dotenv').config();
const mongoose=require("mongoose");
const path=require("path");
var ObjectID = require('mongodb').ObjectID;
const ejsMate=require("ejs-mate");
const user=require("./models/user.js");
const course=require("./models/courses.js");
var flash = require('connect-flash');
const dbUrl=process.env.ATLASDB_URL;
const d=require("./data/course_data.js");
var session = require('express-session');
const MongoStore = require('connect-mongo');
let passport=require("passport")
let LocalStrategy=require("passport-local")
app.use (express.static (path.join (__dirname, "./quiz app")));
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
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
app.use(flash());
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.failureFlash=req.flash("failure")
    res.locals.curruser=req.user;
    next();
})
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.engine("ejs",ejsMate);
app.use(express.urlencoded({extended: true}));
mongoose.connect(dbUrl)
.then(()=>{
    console.log("connected to db");

}).catch((err)=>{
    console.log(err);
})

app.use(express.static(path.join(__dirname, 'public')))








app.listen(3000,()=>{
    console.log("Working");
})
app.get("/codemath",(req,res)=>{
    res.render("index.ejs")
})
app.get("/codemath/user",(req,res)=>{
    res.render("user.ejs");
})
app.post("/codemath/user",async(req,res)=>{
    let {username,email,password}=req.body;
    let data={username,email,password};
    const newuser=new user(data);
    try {
        const registereduser=await user.register(newuser,password);
        req.flash("success","User is registered please login");
        console.log(registereduser);
        const name=registereduser.username;
        const data=await course.find();
        res.redirect("/codemath/login")
    } catch (error) {
        req.flash("success","A user with the given username is already registered");
        res.redirect("/codemath/user");
    }
        
})
app.get("/codemath/login",(req,res)=>{
    res.render("login.ejs");
})
app.post('/codemath/login',passport.authenticate('local',{
    failureRedirect:"/codemath/login",failureFlash:true
}), 
  async function(req, res) {
        const {username,email,password}=req.body;
        const p=password;
        const id=username;
        const data=await course.find();
        
        
        res.render("courses.ejs",{data});
        }
            
    
);
app.get("/codemath/courses/:id",async (req,res)=>{
    if(req.isAuthenticated()){
    let {id}=req.params;
    console.log(id);
    const q= await course.findOne({name:`${id}`});
    res.render("quiz.ejs",{q});}
});

app.get("/codemath/about",(req,res)=>{
    res.render("about.ejs")
})
app.post("/codemath/quiz/:id",async (req,res)=>{
    if(req.isAuthenticated()){
    let {id}=req.params;
    let qu=req.query;
    console.log(id);
    const q= await course.findOne({name:`${id}`});
    console.log(qu)}
})
app.get("/codemath/lecture/:id",async (req,res)=>{
    if(req.isAuthenticated()){
    let {id}=req.params;
    console.log(id);
    const q= await course.findOne({name:`${id}`});
    res.render("lec.ejs",{q});
    }
})
app.get("/codemath/courses",async (req,res)=>{
    const data=await course.find();
    res.render("courses.ejs",{data})
})
app.get("/codemath/course",(req,res)=>{
    if(!req.isAuthenticated()){
        req.flash("error","You must be logged in to see course")
        res.redirect("/codemath")
    }
    else{
        
        res.redirect("/codemath/courses")
    }
})
app.get("*",(req,res)=>{
    res.render("error.ejs")
})
