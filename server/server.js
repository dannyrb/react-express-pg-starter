const express = require('express');
const server = express()
const db = require('./../data/db-config.js')

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Molly\'s Server</h1>')
})

// GET cars
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

server.get('/cars/:id', async (req, res) => {
    try {
        const car = await db.findById(req.params.id)

        if (car) {
            return res
                .status(200)
                .json(car)
        }
        
        return res
            .status(404)
            .json({ 'The car with the specified ID does not exist.' })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'The car you were looking for could not be retrieved'
        })
    }
})


// POST: create
server.post('/', async (req, res) => {
    try {
        const cars = await db.insert(req.body)

        if (cars) {
            return res
                .status(201)
                .json(cars)
        }

        return res
            .status(400)
            .json({ error: 'Please fill out all required fields' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'There was an error while saving the car to the DB'
        })
    }
})

module.exports = server;