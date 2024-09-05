// Importing Pool from the pg module to manage PostgreSQL connections
const { Pool } = require('pg');
require('dotenv').config();  // Load environment variables from .env file

// Configuration for the PostgreSQL connection pool using environment variables
const pool = new Pool({
  user: process.env.DB_USER,        // Load from environment variable
  host: process.env.DB_HOST,        // Load from environment variable
  database: process.env.DB_NAME,    // Load from environment variable
  password: process.env.DB_PASSWORD,// Load from environment variable
  port: process.env.DB_PORT || 5432,        // Load from environment variable
});

// Exporting the pool for use in other parts of the application
module.exports = pool;