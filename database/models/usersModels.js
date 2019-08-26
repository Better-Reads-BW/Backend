const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findByUser, 
  findById, 
  remove, 
  update,
  findBooksByUserId
};

function find() {
  return db('users')
    .select('id', 'username');
};

function findBy(filter) {
  return db('users')
    .where(filter);
};
function findByUser(user) {
  return db('users')
  .where(user);
}

function add(user) {
  return db('users')
    .insert(user, 'id');
};

function findById(id) {
  return db('users')
    .where({ id })
    .select('firstName', 'lastName')
    .first();
};

async function findBooksByUserId(id) {
  const books = await db('books')
    .where({ user_id: id });
    console.log(books)
    return books;
}

function remove(id) {
  return db('users')
    .where({ id })
    .first()
    .delete();
};

function update(user, id) {
  return db('users')
    .where({ id })
    .update(user);
}