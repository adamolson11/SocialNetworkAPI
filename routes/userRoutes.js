const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// Add a friend to a user's friend list
router.route('/:userId/friends').post(addFriend);

// Remove a friend from a user's friend list
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
