const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

function find () {
    return db('employees');
}

module.exports = {
    find
}