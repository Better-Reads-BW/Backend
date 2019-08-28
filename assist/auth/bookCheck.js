const Books = require('../../database/models/booksModel')

 function bookCheck(req, res, next) {
    const newBook = req.body
    const bCheck = Books.findByIsbn(newBook.isbn)

    if (bCheck) {
        res.bookId = bCheck.id 
        next();
    } else {
        const book = Books.addBooksDb(newBook)
        res.bookId = book.Id
        next();
    }
}

module.exports = bookCheck;