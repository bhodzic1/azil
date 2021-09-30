require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const FileType = require('file-type');
var cors = require('cors')
const server = express();
var routes = require('./routes/index');
const db = require('./data/db-config');
const jwt = require("jsonwebtoken");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors())

server.use('/', routes)
server.use(fileUpload());


server.post('/login', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    try {
        if (username) {
            let userLogin = await db.getUserByLogin(username, password);
            let userEmail = await db.getUserByLoginEmail(username, password);
            let admin = await db.getAdminByLogin(username, password);
            if (userLogin) {
                const userToken = { user: userLogin }
                const accessToken = jwt.sign(userToken, process.env.ACCESS_TOKEN_SECRET)
                let user = {
                    "user": userLogin,
                    "role": "User",
                    "token": accessToken
                }
                res.json({ user });
            } else if (admin) {
                const userToken = { user: admin }
                const accessToken = jwt.sign(userToken, process.env.ACCESS_TOKEN_SECRET)
                let user = {
                    "user": admin,
                    "role": "Admin",
                    "token": accessToken
                }
                res.json({ user });
            } else if (userEmail) {
                const userToken = { user: userEmail }
                const accessToken = jwt.sign(userToken, process.env.ACCESS_TOKEN_SECRET)
                let user = {
                    "user": userEmail,
                    "role": "User",
                    "token": accessToken
                }
                res.json({ user });
            } else res.end("False");
        }
    } catch (error) {
        console.log(error)
    }
})

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

server.get('/animal/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const animal = await db.getAnimalById(id);
        return res.status(200).json({ animal });
    } catch (error) {
        console.log(error)
    }
})




module.exports = server;