const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/studentController');

// /api/students
router.route('/').get(getThoughts).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/students/:studentId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/students/:studentId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removereaction);

module.exports = router;
