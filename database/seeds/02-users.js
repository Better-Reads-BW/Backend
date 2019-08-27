
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Jason', password: 'jason', firstName: 'Jason', lastName: 'Smite', aboutMe: 'I am a JavaScript genius', email: 'jason@email.com'},
        {id: 2, username: 'Mel', password: 'mel', firstName: 'Mel', lastName: 'Ford', aboutMe: 'I was born a boss!!!', email: 'CEO@email.com'},
        {id: 3, username: 'Elise', password: 'elise', firstName: 'Elise', lastName: 'Rivera', aboutMe: 'Balling hard and cutting no shorts', email: 'elise@email.com'},
        {id: 4, username: 'John', password: 'john', firstName: 'John', lastName: 'Rivera', aboutMe: 'Balling hard and cutting no shorts', email: 'john@email.com'},
        {id: 5, username: 'Mary', password: 'mary', firstName: 'Mary', lastName: 'Jose', aboutMe: 'I had a little lamb whose fleece was white as snow', email: 'mary@email.com'},
        {id: 6, username: 'Joe', password: 'joe', firstName: 'Joe', lastName: 'Jones', aboutMe: 'I am Joe the giant', email: 'Joe@email.com'}
      ]);
    });
};
