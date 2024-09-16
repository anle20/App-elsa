const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  authorId: String,
  authorName: String,
  title: String,
  content: String,
  date: Date,
  comments: [
    {
      authorId: String,
      authorName: String,
      date: Date,
      content: String,
    },
  ],
  view: Number,
}, { timestamps: true });

function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

const Blog = mongoose.model('Blog', blogSchema);

module.exports = { Blog, isObjectId };
