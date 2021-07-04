const express = require('express');
const server = express();

const db = require('./data/db-config');


server.use(express.json());

const router = express.Router();

server.get('/', (req, res) => {
    res.send('<h1>WELCOME</h1>');
})

server.get('/employees', async (req, res) => {
    try {
        const employees = await db.find();
        return res.status(200).json({ employees });
    } catch (error) {
        console.log(error)
    }
})

module.exports = server;