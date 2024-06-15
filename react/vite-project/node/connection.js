import mongoose from "mongoose";

// connect mongo db
mongoose.connect("mongodb+srv://thanduprameela321:u5bPBcnQWKqMCSrJ@cluster.rumv1z9.mongodb.net/");
 const db = mongoose.connection;
db.on("error",()=>{
    console.log("connection n success");
});

db.on("open",()=>{
    console.log("connection success");
});

export  default db;

/*
    1. create database in mongodb atlas
    2.install mongoose
    3.connect server to mongodb
    4.mvc
    5.routes -path  ('/restaurantList',controller);
    6.controller --- handle logic (post,get,put --etc)
    7. model database with schema
    8. use mongoose method to  work on this tabel (save,find)

*/
