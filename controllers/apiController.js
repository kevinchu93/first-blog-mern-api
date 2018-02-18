const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/Post');

const router = express.Router();

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://test:test@ds257627.mlab.com:57627/first-blog-mern');

router.get(['/', '/posts'], (req, res) => {
  Post.find({}).then((posts) => {
    res.json(posts);
  });
});

router.get('/posts/:post_id', (req, res) => {
  Post.findbyId(req.params.post_id).then((post) => {
    res.json(post);
  }).catch((err) => {
    res.send(err);
  });
});

router.post('/post_new', (req, res) => {
  Post.create({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  }).then(() => {
    res.json({ message: 'Post created!' });
  }).catch((err) => {
    res.status(422).json(err.message);
  });
});

module.exports = router;
