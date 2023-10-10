const User = require('./user')

const Thought= require('./Thought')
//check the casing of these because something is off.



// In a Node.js and Express.js application, an index.js file is commonly used as the entry point or main file of the application. It serves as the central point where you can import and organize various parts of your application, such as models, routes, middleware, and database connections.

//so in this case it is creating an organized, single entry point for your models folder. you only have two but imagine having a DB with like 50 collections or something. The index would help with keeping it organized. 


module.exports = {User, Thought}