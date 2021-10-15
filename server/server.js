const express = require('express');
const server = express()
const db = require('./../data/db-config.js')

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Molly\'s Server</h1>')
})

server.get('/cars', async (req, res) => {
        try {
            const cars = await db.find();
            return res
                .status(200)
                .json(cars)
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: "These are not the cars you are looking for."
            });
        }
    })

module.exports = server;