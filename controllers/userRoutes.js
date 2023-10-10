const express = require('express');
const router = express.Router();
const { User } = require('./models'); // Adjust the path as needed

// Create a new user
router.post('/', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  // Get all users
  router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  // Get a single user by ID
  router.get('/:userId', async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  // Update a user by ID
  router.put('/:userId', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  // Delete a user by ID
  router.delete('/:userId', async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  module.exports = router;
  