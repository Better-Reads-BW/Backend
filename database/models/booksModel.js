const db = require('../dbConfig');

module.exports = {
    addBooksDb,
    findById,
    findByIsbn,
    saveUserBookList,
    savedBooksList,
    getBookList,
    deleteFromList
}

// adds to the books table // post
function addBooksDb(book){
    const [id] = db('books')
        .insert(book, "id")
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
    
    const id = db('saved_list')
        .insert(book, 'id')
        return savedBooksList(book.user_id)
}

// gets a list of user's books // get
function savedBooksList(addBook, user_id) {
    return db('users')
            .where({ id: user_id })
            .first()
            .then((result) => {
                return db('books')
                    .insert(addBook)
                    .then((id) => {
                        return db('saved_list')
                        .insert({ user_id, book_id:id[0]})
                        .then(ids => {
                            return db('saved_list')
                            .where({ user_id })
                            .then(list => {
                                return db('books')
                                
                                // .join('saved_list', 'books.id', 'saved_list.book_id')
                                // .select('books.*')
                                .where({id: list[0].book_id})
                                .then(bid => {
                                    console.log('bid', bid)
                                    return bid
                                })
                            })
                        })
                    })
            }).catch((err) => {
                
            });
        // .innerJoin('books', 'saved_list.book_id', 'books.id')
        // .where({ user_id })
        // .select('books.id', 'books.title', 'books.author', 'books.isbn')
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
