const express = require('express');
const router = express.Router();

// import dari controllerBooks.js
const {
    getBooks,
    getBooksById,
    postBooks,
    updateBooks,
    deleteBooks
} = require('../controller/controllerBooks');

router.get('/books', getBooks);
router.get('/books/:id', getBooksById);
router.post('/books', postBooks);
router.put('/books/:id', updateBooks);
router.delete('/books/:id', deleteBooks);

module.exports = router;