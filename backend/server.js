const express = require('express');  // Import Express
const httpsReq = require('./middleware/httpRequestLogger');  // Import custom middleware for logging
const userRoute = require('./routes/userRoute');  // Import user routes
const postRoute = require('./routes/postRoute');  // Import post routes

const app = express();  // Initialize the Express app
const SERVER_PORT = 3003;  // Define the server port

app.use(express.json());  // Middleware to handle JSON requests
app.use(httpsReq);  // Use the custom logging middleware

// Route for user-related requests
app.use('/users', userRoute);

// Route for post-related requests
app.use('/posts', postRoute);

// Basic route to test server functionality
app.get('/api', (req, res) => {
  res.json({ message: 'Test Number 4 Node.js Server' });  // Send a test response
});

// Start the server
app.listen(SERVER_PORT, () => {
  console.log(`Server is live on port ${SERVER_PORT}`);  // Log when server is running
});
