import mongoose from 'mongoose';

const userTable = new mongoose.Schema({
    fullName : {
        type :String,
        required : true
    },
    email :  {
        type : String,
        required : true
    },
    password :  {
        type : String,
        required : true
    }
});

const userModel =  mongoose.model('users',userTable);

export  default userModel;