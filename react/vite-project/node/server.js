import  express from 'express';
import db from './connection.js';
import { logUserRequest } from './middlewares/applicationLevel.js';

const app = express()
app.use(express.json());

app.listen(3206, ()=>{
    console.log("server is runnig on 3306");
});

app.use(logUserRequest);

export default app;


