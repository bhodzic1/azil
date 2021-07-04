
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments();

        tbl.string('name').notNullable();
        tbl.string('lastname').notNullable();
        tbl.string('phone_number').notNullable();
        tbl.string('address').notNullable();
        tbl.string('mail').notNullable();
        tbl.string('username').notNullable();
        tbl.string('password').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
