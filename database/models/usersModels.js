const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findByUser, 
  findById, 
  remove, 
  update,
};
// get list of users
function find() {
  return db('users')
    .select('id', 'username');
};
// used to login a user
function findByUser(user) {
  return db('users')
  .where(user);
}
// used to register a user
function add(user) {
  return db('users')
    .insert(user, 'id');
};
// get user by id
function findById(id) {
  return db('users')
    .where({ id })
    .select('firstName', 'lastName')
    .first();
};
// update the user // put
function update(user, id) {
  return db('users')
    .where({ id })
    .update(user);
}
// remove a user
function remove(id) {
  return db('users')
    .where({ id })
    .first()
    .delete();
};
