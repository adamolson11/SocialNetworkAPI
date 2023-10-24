const express = require('express');
const router = express.Router();

// These are your middleware route imports.
const userRoutes = require('./userController');
const thoughtRoutes = require('./thoughtControllers');

// Use middleware for parsing JSON data and handling URL-encoded data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Use your routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;