
const express = require('express').Router;
const app = express();

// these are my middle ware route imports. 
const userRoutes = require('./userRoutes'); 
const thoughtRoutes = require('./thoughtRoutes'); 

// Use middleware for parsing JSON data and handling URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //this allows you to use URL-encoded data

// Use your routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);



// I don't need this anymore because I already have a server.js file to run the server.
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = router;