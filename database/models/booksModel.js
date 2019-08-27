const db = require('../dbConfig');

module.exports = {
    addBooks,
    findById,
    findByIsbn,
    saveUserBookList,
    savedBooksList,
    getBookList,
    deleteFromList
}

// adds to the books table // post
function addBooks(book){
    const [id] = db('books')
        .insert(book, id)
        return findById(id)
}

// Locate books by id // get for books
function findById(id){
    return db('books')
        .where({ id })
        .first()
}

// Locate books by isbn // get for isbn
function findByIsbn(isbn){
    return db('books')
        .where({ isbn })
        .first()
}

// Book is saved to a user's list // post
function saveUserBookList(book){
    const [id] = db('saved_list')
        .insert(book, 'id')
        return savedList(book.user_id)
}

// gets a list of user's books // get
function savedBooksList(user_id) {
    return db('saved_list')
        .innerJoin('books', 'saved_list.book_id', 'books.id')
        .where({ user_id })
        .select('books.id', 'books.title', 'books.author', 'books.isbn')
}

// gets a list of all books in the table // get
function getBookList(){
    return db('saved_list')
        .innerJoin('books', 'saved_list.book_id', 'books.id')
        .select('books.id', 'saved_list.book_id', 'books.isbn', 'books.title', 'books.author' )
}

// deleting book from the user's list // delete
function deleteFromList(user_id, book_id){
    return db('saved_list')
        .where({ user_id })
        .andWhere({ book_id })
        .delete()
}
