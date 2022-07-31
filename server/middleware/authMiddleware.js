const jwt = require('jsonwebtoken')
const { Error, Success, success} = require("../util/response.util");

module.exports =async (req,res,next)=>{
    try {
        const token = req.headers["authorization"].split(" ")[1];
   jwt.verify(token,process.env.JWT_SECRETKEY,(err,decoded)=>{
        if(err)
        {
            return  res.status(401).send({message:"Auth failed"})
        }
        else{
           req.body.userId = decoded.id
           next();
        }
    })
    } catch (error) {
        return  res.status(401).send({message:"Auth failed"})

    }
}