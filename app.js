//Usanndo objeto express
const express = require('express');

//App de express
const app = express();
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//ROUTER
//Path inicial
app.get('/', (req, res)=>{
    res.send('Hello world!');
});

app.get('/launchx', (req, res)=>{
    res.send('Bienvenidos a launchx!');
});

app.get('/explorersInNode', (req, res)=>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer);
});

app.get('/explorer/:explorerName', (req, res)=>{
    res.send(req.params);
});

//Con esto inicializamos esta app
app.listen(port, ()=>{
    console.log(`Example listening at port ${port}`);
})

