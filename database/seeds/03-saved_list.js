
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('saved_list')
    .then(function () {
      // Inserts seed entries
      return knex('saved_list').insert([
        {id: 1, user_id: 1, book_id: 1,},
        {id: 2, user_id: 2, book_id: 2,},
        {id: 3, user_id: 3, book_id: 3 },
        {id: 4, user_id: 2, book_id: 1 },
        {id: 5, user_id: 2, book_id: 3 },
        {id: 6, user_id: 1, book_id: 3 },
      ]);
    });
};
