import { createRestaurant , restaurantList , restaurantById , updateRestaurant } from "../controllers/restaurantController.js";

export function  restaurantRoutes(app){
    app.post('/addRestaurant',createRestaurant);
    app.get('/restaurantList',restaurantList);
    app.get("/restaurant/:id",restaurantById);
    app.put('/updateRestaurant/:id',updateRestaurant);
}