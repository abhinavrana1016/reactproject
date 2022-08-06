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
    },
    isDoctor:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    watchedNotification:{
        type:Array,
        default:[]
    },
    unseenNotification:{
        type:Array,
        default:[],
    }

},{timestamps:true})
module.exports =mongoose.model("user",userSchema)