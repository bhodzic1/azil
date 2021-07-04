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


module.exports = {
    find,
    findUsers,
    addUser
}