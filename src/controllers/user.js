const User = require('../models/user');

const getAllUsers = (req, res) => {
  return User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.status(500).json(err));
};

const getUser = (req, res) => {
  return User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.sendStatus(404);
      } else {
        res.json(user);
      }
    })
    .catch((err) => res.status(500).json(err));
};

const createUser = (req, res) => {
  return User.create(req.query)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.status(500).json(err));
};

const deleteUser = async (req, res) => {
  return User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        res.sendStatus(404);
      } else {
        res.json(user);
      }
    })
    .catch((err) => res.status(500).json(err));
};

const updateUser = async (req, res) => {
  return User.findByIdAndUpdate(req.params.id, req.query)
    .then((user) => {
      if (!user) {
        res.sendStatus(404);
      } else {
        res.json(user);
      }
    })
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
