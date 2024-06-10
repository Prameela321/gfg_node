import app from '../server.js';
app.get("/",(req , res)=>{
    res.send('Learning node js');
});

const users = [
    {
        id : 1,
        name: "prameela",
        age : 23
    },
    {   id : 2,
        name: "abc",
        age: 21
    }
];


app.get('/users',(req,res)=>{
    res.send(users);
})

app.post('/addUser',(req,res) =>{
    let user = {
        name : req.body.name,
        age  : req.body.age
    }
    users.push(user);
    res.send(users);
})

app.put('/updateUser/:id',(req,res) =>{
    let userId = req.params.id;
    const user = users.find(user => userId == user.id);
    if(!user){
        res.status(404).json({message: "User Not Found"});
    }
    const keys = Object.keys(req.body);
    keys.forEach( key =>{
        if(!user[key]){
            res.status(404).end({message : 'Invalid Key'});
        }

        user[key] = req.body[key];
    })
    res.json(users);
})

// restaurantRoutes(app);


export default app;

