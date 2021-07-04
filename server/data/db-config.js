const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);


function find () {
    return db('employees');
}

function findUsers() {
    return db('users');
}


module.exports = {
    find,
    findUsers
}