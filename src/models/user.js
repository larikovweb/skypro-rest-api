const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: {
      value: true,
      message: 'Name is required',
      minlength: 2,
    },
  },
  lastname: {
    type: String,
    required: {
      value: true,
      message: 'Lastname is required',
      minlength: 2,
    },
  },
  username: {
    type: String,
    required: {
      value: true,
      message: 'Username is required',
      minlength: 5,
    },
  },
});

module.exports = model('User', userSchema);
