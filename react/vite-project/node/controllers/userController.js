import userModel from "../models/userModel.js";
import app from '../server.js';
import bcrypt from 'bcrypt';
import { userRoutes } from "../routes/userRoutes.js";
import jwt from 'jsonwebtoken';

export function registerUser(req,res){
    const { fullName, email , password } = req.body;
    
    const userRow = userModel({
        fullName : fullName,
        email : email,
        password : bcrypt.hashSync(password,10)
    });

    userModel.findOne({email}).then(data => {
        if(data){
            res.status(400).json({message: "User Already Registered"});
        }
        userRow.save().then( row =>{
            if(!row){
                res.status(404).send({message :  " Something Went Wrong"})
            }  
            res.status(200).json({message: "User Registered"}) 
        }).catch(err => {
            res.status(500).json({message : err.message});
        })
    })  

}

export function userLogin(req,res){
    const {email,password} = req.body;
    // res.send(email);
    userModel.findOne({email}).then(data =>{
        
        if(!data){
            res.status(404).json({message : "User not registered"})
        }
        const passwordStatus = bcrypt.compareSync(password,data.password);
       
        if(!passwordStatus){
            res.status(401).json({message : "Password or Email is Incorrect"})
        }

        const token = jwt.sign({id: data._id},"secretKey",{expiresIn : "1h"});
        
        res.status(200).json({
            user: {
                email : data.email,
                password  : data.password
            },
            accessToken : token 
        });
    }).catch(err =>{
        res.status(500).json({message : err.message})
   }) 
}

userRoutes(app);