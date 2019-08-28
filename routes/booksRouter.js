const Books = require('../database/models/booksModel');
// const bookCheck = require('../assist/auth/bookCheck');
const restrict = require('../assist/auth/restrict');
const router = require('express').Router();
const axios = require('axios');


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

router.delete('/delete', (req, res) => {
    const userId = req.user.subject
    const removeBook = req.body

    const deleted = Books.deleteFromList(userId, removeBook)
        .then((result) => {
            if (deleted) {
                res.status(200).json({ deleted });
            } else {
                res.status(401).json({ message: "Could not find book."});
            }
        }).catch((err) => {
            res.status(500).json({ message: "Could not delete book." });
        });
        
});

// This sends description information to the api and returns json information about book recommendations to the user
router.post('/recommend',(req, res) => {
    const book_desc = req.body
   console.log(book_desc, "book")
    axios.post(`http://bettereads.herokuapp.com/api`, book_desc)
        .then(info => {
            console.log(info)
          res.json(info.data)
        }).catch(({error}) => {
            res.status(500).json(error);
        })

})

module.exports = router;