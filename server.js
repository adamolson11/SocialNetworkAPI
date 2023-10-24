const express = require('express');
const connection = require('./config/connection');
const router = require('./controllers');

const { User, Thought } = require('./models');

const app = express();
const PORT = process.env.PORT || 3005;

// Define a root route
app.get('/', (req, res) => {
  res.send("Welcome to the root of the application.");
});

// Use middleware for parsing JSON data and handling URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your routes
app.use(router);   //!!!!!!!!!!!!!!!!!! Dammit why is this not working.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const thought = new Thought({
//   username: 'bob',
//   thoughtText: "I wonder if I could build a choo choo train with a hammer?"
// });

// thought.save().then(savedThought => console.log(savedThought));