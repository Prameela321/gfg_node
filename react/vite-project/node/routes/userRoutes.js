import { registerUser , userLogin } from "../controllers/userController.js";

export function userRoutes(app){
    app.post('/userRegister',registerUser);
    app.post('/login',userLogin);
};