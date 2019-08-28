
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', tbl => {
    tbl.increments();
    tbl
        .string('isbn')
        .notNullable()
        .unique();
    tbl
        .string('book_title')
    tbl
        .string('book_authors')
    tbl
        .string('book_desc')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')
};
