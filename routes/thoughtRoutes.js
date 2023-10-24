const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  // removeReaction, //
} = require('../controllers/thoughtControllers');

// /api/thoughtss
router.route('/').get(getThoughts).post(createThought);

// /api/thoughtss/:thoughtsId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughtss/:thoughtsId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughtss/:thoughtsId/reactions/:reactionId
// router.route('/:thoughtId/reactions/:reactionId').delete(removereaction);

module.exports = router;
