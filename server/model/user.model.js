const mongoose =require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    mobileno:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
    },
    gender:{
        type:String,
    }

},{timestamps:true})
module.exports =mongoose.model("user",userSchema)