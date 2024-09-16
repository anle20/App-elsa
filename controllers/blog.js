const { Blog, isObjectId } = require('../models/Blog');
const User = require('../models/User');

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).send(blogs);
};

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;

  const user = await User.findById(req.user.id);

  const blog = await Blog.create({
    authorId: req.user.id,
    authorName: user.profile.name,
    title,
    content,
    date: new Date(),
    comment: [],
    view: 0,
  });

  res.status(201).send(blog);
};

exports.updateBlog = async (req, res) => {
  const {
    body: { title, content },
    params: { blogId },
  } = req;

  if (!isObjectId(blogId)) {
    return res.status(422).send('Invalid blog id');
  }

  const blog = await Blog.findByIdAndUpdate(blogId);
  if (!blog) {
    return res.status(404).send('Not found');
  }

  await Blog.updateOne({ _id: blogId }, {
    title,
    content,
  });

  res.status(200).send();
};

exports.deleteBlog = async (req, res) => {
  const { blogId } = req.params;

  if (!isObjectId(blogId)) {
    return res.status(422).send('Invalid blog id');
  }

  const blog = await Blog.findByIdAndUpdate(blogId);
  if (!blog) {
    return res.status(404).send('Not found');
  }

  await Blog.deleteOne({
    _id: req.params.blogId,
  });

  res.status(200).send();
};
