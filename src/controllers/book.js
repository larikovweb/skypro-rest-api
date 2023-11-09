const Book = require('../models/book');

const getAllBooks = (req, res) => {
  return Book.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => res.status(500).json(err));
};

const getBook = (req, res) => {
  return Book.findById(req.params.id)
    .then((book) => {
      if (!book) {
        res.sendStatus(404);
      } else {
        res.json(book);
      }
    })
    .catch((err) => res.status(500).json(err));
};

const createBook = (req, res) => {
  return Book.create(req.query)
    .then((book) => {
      res.json(book);
    })
    .catch((err) => res.status(500).json(err));
};

const deleteBook = async (req, res) => {
  return Book.findByIdAndDelete(req.params.id)
    .then((book) => {
      if (!book) {
        res.sendStatus(404);
      } else {
        res.json(book);
      }
    })
    .catch((err) => res.status(500).json(err));
};

const updateBook = async (req, res) => {
  return Book.findByIdAndUpdate(req.params.id, req.query)
    .then((book) => {
      if (!book) {
        res.sendStatus(404);
      } else {
        res.json(book);
      }
    })
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
};
