const express = require('express');
const postService = require('../services/postService');

const router = express.Router();

router.get(['/', '/posts'], (req, res) => {
  postService.getAllPosts(req, res);
});

router.get('/posts/:post_id', (req, res) => {
  postService.getOnePost(req, res);
});

router.post('/post_new', (req, res) => {
  postService.createNewPost(req, res);
});

module.exports = router;
