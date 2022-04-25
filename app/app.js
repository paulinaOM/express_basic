//Usanndo objeto express
const express = require('express');
const { param } = require('express/lib/request');

//App de express
const app = express();
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//ROUTER
//Path inicial
app.get('/', (req, res)=>{
    res.send('Hello world!');
});
 
//Respondiendo texto
app.get('/launchx', (req, res)=>{
    res.send('Bienvenidos a launchx!');
});

//Regresando un objeto
app.get('/explorersInNode', (req, res)=>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer);
});

//Agregar ruta que reciba query params
app.get('/explorer/:explorerName/:explorerAge', (req, res)=>{
    res.send(req.params);
});

//Con esto inicializamos esta app
// app.listen(port, ()=>{
//     console.log(`Example listening at port ${port}`);
// })

module.exports = app

