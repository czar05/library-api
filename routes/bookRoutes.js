const express = require('express');
const router = express.Router();
const { 
  getBooks, 
  getBookById, 
  createBook, 
  updateBook, 
  deleteBook 
} = require('../controllers/bookController');
const { validateBook } = require('../middleware/validation');

// GET /books - Get all books
router.get('/', getBooks);

// GET /books/:id - Get a book by ID
router.get('/:id', getBookById);

// POST /books - Create a new book
router.post('/', validateBook, createBook);

// PUT /books/:id - Update a book
router.put('/:id', validateBook, updateBook);

// DELETE /books/:id - Delete a book
router.delete('/:id', deleteBook);

module.exports = router;