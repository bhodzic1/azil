exports.up = function (knex) {
    return knex.schema.createTable("adopts", tbl => {
        tbl.increments();

        tbl.integer('user').notNullable();
        tbl.integer('animal').notNullable();
        tbl.string('adopted').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('adopts');
};

