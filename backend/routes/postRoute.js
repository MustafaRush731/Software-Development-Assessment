const { getPosts, countComments } = require('../models/postModel');  // Import post model functions
const express = require('express');  // Import Express framework
const router = express.Router();  // Create an Express router

// Route to count comments on a specific post
router.get('/:id/comments/count', async (req, res) => {
  const { id } = req.params;  // Get the post ID from the URL parameters
  try {
    const commentCount = await countComments(id);  // Get the comment count for the post
    res.json({ postId: id, commentCount });  // Respond with the post ID and the comment count
  } catch (err) {
    res.status(500).send('Server Error');  // Send a 500 status code for server errors
  }
});

// Route to get posts by a specific user
router.get('/user/:id', async (req, res) => {
  const { id } = req.params;  // Get the user ID from the URL parameters
  try {
    const posts = await getPosts(id);  // Get the posts for the user
    res.json(posts);  // Respond with the posts
  } catch (err) {
    res.status(500).send('Server Error');  // Send a 500 status code for server errors
  }
});

module.exports = router;  // Export the router for use in the main server file