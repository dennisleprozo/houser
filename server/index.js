require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller')

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(err => console.log(err));

app.get('/api/houses', controller.getAllHouses);
app.post('/api/houses/add', controller.createHouse);
app.delete('/api/house/:id', controller.deleteHouse);


const {
    SERVER_PORT, 
    CONNECTION_STRING
} = process.env

app.listen(SERVER_PORT, () => {
    console.log(`Don't stop listening on Port ${SERVER_PORT}`);
})