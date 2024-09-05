const pool = require('../config/dbConfig');  // Importing the PostgreSQL connection pool from the config file

// Function to retrieve posts created by a specific user
const getPosts = async (userId) => {
  try {
    // Execute a SQL query to get all posts where the user_id matches the provided userId
    const result = await pool.query('SELECT * FROM posts WHERE user_id = $1', [userId]);
    return result.rows;  // Return the rows of posts as an array
  } catch (err) {
    throw err;  // If an error occurs, throw it so it can be handled by the calling function
  }
};

// Function to count comments on a specific post
const countComments = async (postId) => {
  try {
    // Execute a SQL query to count the number of comments where the post_id matches the provided postId
    const result = await pool.query('SELECT COUNT(*) FROM comments WHERE post_id = $1', [postId]);
    return parseInt(result.rows[0].count, 10);  // Convert the count from a string to an integer and return it
  } catch (err) {
    throw err;  // If an error occurs, throw it so it can be handled by the calling function
  }
};

module.exports = { getPosts, countComments };  // Export the functions for use in other modules