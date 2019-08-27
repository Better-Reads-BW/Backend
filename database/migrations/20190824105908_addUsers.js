
exports.up = function(knex, Promise) {
 return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
        .string('username', 128)
        .unique()
        .notNullable();
    tbl
        .string('password', 128)
        .notNullable();
    tbl
        .string('firstName', 128);
    tbl
        .string('lastName', 128);
    tbl
        .string('aboutMe');

    tbl
        .string('email');
 }) 
};

exports.down = function(knex,Promise) {
 return knex.schema.dropTableIfExists('users')
};
