
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books')
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, isbn: '54887444466NM', title: 'Sandy Bridges', author: 'Jam E. Rock'},
        {id: 2, isbn: '88662941656WA', title: 'How We Were', author: 'Tommy E. Lee'},
        {id: 3, isbn: '43535088893QA', title: 'A Winter\'s Night', author: 'Peter McIntosh'},
        {id: 4, isbn: '98544365147HG', title: 'Not a Win', author: 'John Basehead'},
        {id: 5, isbn: '32656411955TH', title: 'What you feeling', author: 'Number Feed'},
        {id: 6, isbn: '56255155898KM', title: 'Huckle BerryFin', author: 'Mark Twain'}
      ]);
    });
};
