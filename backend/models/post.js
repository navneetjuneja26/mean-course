const mongoose = require('mongoose');

// https://mongoosejs.com/docs/guide.html

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports mongoose.model('Post', postSchema);
