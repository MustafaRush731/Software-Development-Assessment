const pool = require('../config/dbConfig'); // Load up the PostgreSQL connection pool

// Create the 'users' table if it doesn't exist yet
const createUserTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL
    )
  `);
};

// Add a new user to the 'users' table
const createUser = async (name, email, password) => {
  // Insert the new user data and return the added user
  const result = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]);
  return result.rows[0]; // Return the inserted user
};

// Get all users from the 'users' table
const fetchAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users'); // Fetch all users
  return result.rows; // Return the list of users
};

// Get a user by their id from the 'users' table
const fetchUserById = async (userId) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]); // Find a user by their id
  return result.rows[0]; // Return the user with that email
};

// Update a user in the 'users' table
const modifyUser = async (id, name, email, password) => {
  // Update the user's info and return the updated user
  const result = await pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *', [name, email, password, id]);
  return result.rows[0]; // Return the updated user
};

// Delete a user from the 'users' table by ID
const removeUser = async (id) => {
  const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]); // Delete the user by ID
  return result.rows[0]; // Return the deleted user
};

// Export the functions so they can be used in other parts of the app
module.exports = { createUserTable, createUser, fetchAllUsers, fetchUserById, modifyUser, removeUser };
