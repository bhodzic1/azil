const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);


function find () {
    return db('employees');
}

function findUsers () {
    return db('users');
}

function addUser (user) {
    return db('users').insert({ name: user.name, lastname: user.lastname, phone_number: user.phone_number, address: user.address, mail: user.mail, username: user.username, password: user.password });
}

function addAnimal (data, animal) {
    return db('animals').insert({ category: animal.category, race: animal.race, age: animal.age, image: data, health: animal.health })
}

function getAnimalById (id) {
    return db('animals').where({ id: id }).first();
}

function getAllAnimals () {
    return db('animals').select("id", "category", "race", "age", "health");
}


module.exports = {
    find,
    findUsers,
    addUser,
    addAnimal,
    getAnimalById,
    getAllAnimals
}