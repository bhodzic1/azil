const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const FileType = require('file-type');
var cors = require('cors')
const server = express();
var routes = require('./routes/index');
const db = require('./data/db-config');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors())

server.use('/', routes)
server.use(fileUpload());


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

server.post('/users', async (req, res) => {
    try {
        const user = await db.addUser(req.body)
        
    } catch (error) {
        console.log(error)
    }
})

server.post('/animal', async (req, res) => {
    try {
        const data = req.files.image.data;
        const animal = await db.addAnimal(data, req.body)

    } catch (error) {
        console.log(error)
    }
})

server.get('/img/:id', async (req, res) => {
    const id = req.params.id;
    const img = await db.getAnimalById(id);
    if (img) {
        const contentType = await FileType.fromBuffer(img.image);
        res.type(contentType.mime);
        res.end(img.image);
    } else {
        res.end('No image with that id!');
    }
})

server.get('/animals', async (req, res) => {
    try {
        const animals = await db.getAllAnimals();
        return res.status(200).json({ animals });
    } catch (error) {
        console.log(error)
    }
})




module.exports = server;