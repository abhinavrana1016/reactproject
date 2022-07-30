const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
const connection = mongoose.connection;
connection.on("connected",()=>{
    console.log("mongoDb is connected")
});
connection.on("error",(error)=>{
    console.log("error in mongoDb connection",error);
});

module.exports = mongoose;