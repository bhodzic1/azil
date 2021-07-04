const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const server = express();
var routes = require('./routes/index');
const db = require('./data/db-config');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors())

server.use('/', routes)


server.get('/employees', async (req, res) => {
    try {
        const employees = await db.find();
        return res.status(200).json({ employees });
    } catch (error) {
        console.log(error)
    }
})

server.get('/users', async (req, res) => {
    try {
        const users = await db.findUsers();
        return res.status(200).json({ users });
    } catch (error) {
        console.log(error)
    }
})




module.exports = server;