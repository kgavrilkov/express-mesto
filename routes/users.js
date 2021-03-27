const router = require('express').Router();
const { getUsers, getUserById, createUser, updateUser, updateAvatar } = require('../controllers/users');

router.get('/', getUsers)
router.get('/:userId', getUserById)
router.post('/', createUser)
router.patch('/me/:userId', updateUser)
router.patch('/me/avatar/:userId', updateAvatar)

module.exports = router;