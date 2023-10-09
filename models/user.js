const { Schema, model } = require('mongoose');

// Define the User schema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

// This chunk of code will create a  virtual called friendCount to retrieve the length of the user's friends array field on query
//In Mongoose, a virtual is a property that you can add to a document (a record in the database) that is not stored directly in the database but is computed or derived from other fields. Virtuals are useful for adding calculated properties to your documents without actually persisting them in the database.
//in otherwords junk you don't want cluttering your collection...

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
