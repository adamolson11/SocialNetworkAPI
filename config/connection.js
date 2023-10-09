const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://127.0.0.1:27017/socialMediaApp')//this is the local default hose and the default port and then YOUR DB name found on the mongoose instructions page

module.exports= connection