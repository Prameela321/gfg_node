import restaurantModel from "../models/restaurantModel.js";
import { restaurantRoutes } from "../routes/restaurantRoutes.js";
import  app from '../server.js';

export function createRestaurant(req,res){
    const  { price , nameRestaurant , rating , delivery , cuisines , location , imgId  } = req.body;
    const restaurantRow = new restaurantModel({price , nameRestaurant , rating , delivery , cuisines , location , imgId});

    restaurantRow.save().then(data =>{
        if(!data){
            res.status(400).end({message : "Something Went wrong"});
        }
        res.status(200).json(data);
    }).catch(error =>{
        res.stauts(500).end({message : error.message});
    })
}

export  function restaurantList(req,res){

    restaurantModel.find().then((data) =>{
        if(!data)
            res.status(404).end({message: "No Data Found"});
        res.status(200).send(data);
    }).catch(err =>{
        res.status(500).json({message: err.message});
    })
}

export function  restaurantById(req,res){
    const resId = req.params.id;
    restaurantModel.findById(resId).then(data =>{
        if(!data)
            res.status(404).end({message: "Data Not Found"});
        res.json(data)
    }).catch(err =>{
        res.status(500).end({message: err.message});
    })
}


export function updateRestaurant(req,res){
    const resId = req.params.id;
    restaurantModel.findByIdAndUpdate(resId,{rating:5}).then(data =>{
        if(!data)
            res.status(404).json({message : "Data Not Found"});
        res.status(200).json(data);
    }).catch(err =>{
        res.status(500).json({message: err.message});
    })
}

restaurantRoutes(app)



