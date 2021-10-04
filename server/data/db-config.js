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

function addAdopt (userId, animalId, adopted) {
    return db('adopts').insert({ user: userId, animal: animalId, adopted: adopted });
}

function getAnimalById (id) {
    return db('animals').where({ id: id }).first();
}

function getAllAnimals () {
    return db('animals').select("id", "category", "race", "age", "health");
}

function getUserById (userId) {
    return db('users').select("id", "name", "lastname", "mail", "phone_number", "address").where({ id: userId }).first();
}

function getUserByUsername (username) {
    return db('users').where({ username: username }).first();
}

function getUserByEmail (email) {
    return db('users').where({ mail: email }).first();
}

function getUserByLogin (username, password) {
    return db('users').where({ username: username, password: password }).first();
}

function getUserByLoginEmail (mail, password) {
    return db('users').where({ mail: mail, password: password }).first();
}

function getAdminByLogin (username, password) {
    return db('employees').where({ username: username, password: password }).first();
}

function getAdminByLoginEmail (mail, password) {
    return db('employees').where({ mail: mail, password: password }).first();
}

function getAdoptionRequests () {
    return db('adopts').where({ adopted: "Requested" });
}

function getAnimalFromAdoptions (id) {
    return db('adopts').where({ animal: id }).first();
}

function getAdobtionsByUserId (id) {
    return db('adopts').where({ user: id });
}

function updateAdoption (data) {
    return db('adopts').update({ adopted: data.status }).where({ id: data.id });
}

function deleteRequest (userId, animalId) {
    return db('adopts').delete().where({ user: userId, animal: animalId });
}

function getConfirmedAdoptions () {
    return db('adopts').where({ adopted: "Confirmed" });
}

module.exports = {
    find,
    findUsers,
    addUser,
    addAnimal,
    getAnimalById,
    getAllAnimals,
    getUserByLogin,
    getUserByLoginEmail,
    getAdminByLogin,
    getAdminByLoginEmail,
    addAdopt,
    getUserById,
    getAdoptionRequests,
    getAnimalFromAdoptions,
    getAdobtionsByUserId,
    updateAdoption,
    getUserByUsername,
    getUserByEmail,
    deleteRequest,
    getConfirmedAdoptions
}