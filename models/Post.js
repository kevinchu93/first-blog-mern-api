const mongoose = require('mongoose');

const chickenSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Anonymous',
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date(),
  },
});

module.exports = mongoose.model('post', chickenSchema);
