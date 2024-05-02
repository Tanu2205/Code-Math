const mongoose=require("mongoose");
const initdata=require("./course_data.js");
const c=require("../models/courses.js");

async function main(){
    await mongoose.connect();
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
