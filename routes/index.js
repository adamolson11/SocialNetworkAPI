const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtsRoutes);

module.exports = router;
