
exports.up = function(knex, Promise) {
  return knex.schema.createTable('saved_list', tbl => {
    tbl.increments();
    tbl
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    tbl
        .integer('book_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('books')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('saved_list')
};
