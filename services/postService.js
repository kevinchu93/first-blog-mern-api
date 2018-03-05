const mongoose = require('mongoose');
const Post = require('../models/Post');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://test:test@ds257627.mlab.com:57627/first-blog-mern');

const getAllPosts = (req, res) => {
  Post.find({}).then((posts) => {
    res.json(posts);
  });
};

const getOnePost = (req, res) => {
  Post.findById(req.params.post_id).then((post) => {
    res.json(post);
  }).catch((err) => {
    res.send(err);
  });
};

const createNewPost = (req, res) => {
  Post.create({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  }).then(() => {
    res.json({ message: 'Post created!' });
  }).catch((err) => {
    res.status(422).json(err.message);
  });
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
};
