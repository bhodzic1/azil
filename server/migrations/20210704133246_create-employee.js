
exports.up = function(knex) {
    return knex.schema.createTable("employees", tbl => {
        tbl.increments();

        tbl.string('name').notNullable();
        tbl.string('lastname').notNullable();
        tbl.string('phone_number');
        tbl.string('address').notNullable();
        tbl.string('qualification');
        tbl.integer('hired_year').notNullable();
        tbl.string('username').notNullable();
        tbl.string('password').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('employees');
};
