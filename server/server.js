const express = require('express');
const CarsController = require('./controllers/CarsController.js')

const server = express()

server.use(express.json())

// Register our controller
server.use('/cars', CarsController);

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Molly\'s Server</h1>')
})

module.exports = server;