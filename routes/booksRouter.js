const Books = require('../database/models/booksModel');
const bookCheck = require('../assist/auth/bookCheck');
const restrict = require('../assist/auth/restrict');
const router = require('express').Router();


router.post('/:id/save', restrict, bookCheck,(req, res) => {
    // the goal is to have the bookId come from the middleware
    const addBook = { user_id: req.params.id, book_id: res.bookId}
    console.log("saved book",addBook)
    Books
        .saveUserBookList(addBook)
        .then((saved) => {
            res.status(201).json(saved);
        }).catch((err) => {
            res.status(500).json(console.log(err));
        });
});


module.exports = router;