
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', tbl => {
    tbl.increments();
    tbl
        .string('isbn')
        .notNullable()
        .unique();
    tbl
        .string('title')
    tbl
        .string('author')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')
};
