const Books = require('../database/models/booksModel');
// const bookCheck = require('../assist/auth/bookCheck');
const restrict = require('../assist/auth/restrict');
const router = require('express').Router();


router.post('/save', restrict, (req, res) => {
    // the goal is to have the bookId come from the middleware
    const addBook = req.body;
    const userId = req.user.subject;
   
    Books
        .savedBooksList(addBook, userId)
        .then((saved) => {
            res.status(201).json(saved);
        }).catch((err) => {
            res.status(500).json(console.log(err));
        });
});

// This information to the api and returns json information about book recommendations to the user
router.post('/description',(req, res) => {
    const { book_desc } = req.body;

    axios.get(`https://bettereads.herokuapp.com/api/${book_desc}`)
        .then(res => {
            console.log(res.data)
        })
})
module.exports = router;