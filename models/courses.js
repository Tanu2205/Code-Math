const mongoose=require("mongoose");
const schema=mongoose.Schema;
const u='mongodb://127.0.0.1:27017/new';
const quizschema=new schema({
    question:{
        type:String
    },
    options:{
        type:[]
    },
    correctAnswer:{
        type:Number
    }

})
const courseschema=new schema({
    name:{type:String},
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    quiz:{
        type:[quizschema],
        
    },
    image:{
        type:String
    },
    lecture:{
        type:String
    },
    question:{
        type:String
    }
})


const quiz=mongoose.model("quiz",quizschema)
module.exports=mongoose.model("course",courseschema)

