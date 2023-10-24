const express = require('express');
const router = express.Router();
const { Thought, User } = require('./models'); 

// Create a new thought
router.post('/', async (req, res) => {
  try {
    const thought = await Thought.create(req.body);

    // Add the thought's ID to the user's thoughts array
    await User.findByIdAndUpdate(thought.userId, { $push: { thoughts: thought._id } });

    res.status(201).json(thought);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Get all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a single thought by ID
router.get('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a thought by ID
router.put('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a thought by ID
router.delete('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    // Remove the thought's ID from the user's thoughts array
    await User.findByIdAndUpdate(thought.userId, { $pull: { thoughts: thought._id } });

    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
