import mongoose from 'mongoose';

const restaurantTable = new mongoose.Schema({
    price : String,
    nameRestaurant : String,
    rating : String,
    delivery : String,
    cuisines : String,
    location : String,
    imgId : String

})

const restaurantModel =  mongoose.model("restaurants",restaurantTable);
export default restaurantModel;