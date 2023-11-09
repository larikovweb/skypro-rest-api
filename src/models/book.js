const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: {
    type: String,
    required: {
      value: true,
      message: 'Title is required',
      minlength: 2,
    },
  },
  author: {
    type: String,
    required: {
      value: true,
      message: 'Author is required',
      minlength: 2,
    },
  },
  year: {
    type: Number,
    required: {
      value: true,
      message: 'Year is required',
    },
  },
});

module.exports = model('Book', bookSchema);
