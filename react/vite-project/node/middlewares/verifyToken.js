import  jwt  from 'jsonwebtoken';
import userModel from '../models/userModel.js';
function verifyToken(req,res,next){
    if(req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === 'JWT'){
        console.log(req.headers.authorization.split(" ")[1]);
        jwt.verify(
            req.headers.authorization.split(" ")[1],
            "secretKey",
            function(err,verifiedToken){
                console.log(verifiedToken)
                if(err){
                    res.status(401).json({message : "Invalid token"})
                }
                userModel.findById(verifiedToken._id).then(user =>{
                    req.user =  user;
                    next();
                }).catch(err=>{
                    res.status(500).json({message: err.message})
                })
            }
        )
    }else{
        res.status(403).json({message: "accessToken is missing"})
    }
}

export default verifyToken;