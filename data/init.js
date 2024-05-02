const mongoose=require("mongoose");
const initdata=require("./course_data.js");
const c=require("../models/courses.js");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/new');
}
main().then(()=>{
    console.log("Connected to db");
})
const initDB=async ()=>{
    await c.deleteMany({});
    await c.insertMany(initdata.data);
    console.log("Data was initialised");
}
initDB();
