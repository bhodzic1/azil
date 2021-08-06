
exports.up = function (knex) {
    return knex.schema.createTable("animals", tbl => {
        tbl.increments();

        tbl.string('category').notNullable();
        tbl.string('race');
        tbl.integer('age').notNullable();
        tbl.string('image').notNullable();
        tbl.string('health').notNullable();

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('animals');
};
