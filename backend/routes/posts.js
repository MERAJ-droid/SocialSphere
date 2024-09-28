const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.post('/create', async (req, res) => {
  const { content } = req.body;
  const post = new Post({ content });

  try {
    await post.save();
    res.status(201).send('Post created successfully');
  } catch (error) {
    res.status(400).send('Error creating post');
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).send('Error fetching posts');
  }
});

module.exports = router;
