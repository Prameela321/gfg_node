import { createRestaurant , restaurantList , restaurantById , updateRestaurant } from "../controllers/restaurantController.js";
import verifyToken from "../middlewares/verifyToken.js";

export function  restaurantRoutes(app){
    app.post('/addRestaurant',createRestaurant);
    app.get('/restaurantList',verifyToken,restaurantList);
    app.get("/restaurant/:id",restaurantById);
    app.put('/updateRestaurant/:id',updateRestaurant);
}