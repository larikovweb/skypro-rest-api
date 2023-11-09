const { Router } = require('express');
const router = Router();
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/user');

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
