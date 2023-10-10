const { Schema, model } = require('mongoose');

// this defines the reaction schema for the data in your collection
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleString(), // Formats the timestamp on query
  },
});

// This Definest the Thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleString(), // Format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Array of nested documents created with the reactionSchema
});

// Create a virtual called reactionCount to retrieve the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;