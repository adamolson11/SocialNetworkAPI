const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtRoutes');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtsRoutes);

module.exports = router;
//so it is connected but the next step is to connect the individual route to get thoughts routes
//where does the get thoughts route sync with the home and why does user routes