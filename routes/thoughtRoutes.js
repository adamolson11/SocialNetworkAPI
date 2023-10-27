const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  // removeReaction, //
} = require('../controllers/thoughtControllers');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtsId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/:thoughtsId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtsId/reactions/:reactionId
// router.route('/:thoughtId/reactions/:reactionId').delete(removereaction);

module.exports = router;
