
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books')
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, isbn: '54887444466NM', book_title: 'Sandy Bridges', book_authors: 'Jam E. Rock', book_desc: "this book is about fantasy"},
        {id: 2, isbn: '88662941656WA', book_title: 'How We Were', book_authors: 'Tommy E. Lee', book_desc: "this book is about fantasy"},
        {id: 3, isbn: '43535088893QA', book_title: 'A Winter\'s Night', book_authors: 'Peter McIntosh', book_desc: "this book is about fantasy"},
        {id: 4, isbn: '98544365147HG', book_title: 'Not a Win', book_authors: 'John Basehead', book_desc: "this book is about fantasy"},
        {id: 5, isbn: '32656411955TH', book_title: 'What you feeling', book_authors: 'Number Feed', book_desc: "this book is about fantasy"},
        {id: 6, isbn: '56255155898KM', book_title: 'Huckle BerryFin', book_authors: 'Mark Twain', book_desc: "this book is about fantasy"}
      ]);
    });
};
