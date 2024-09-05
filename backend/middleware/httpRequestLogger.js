// Middleware to log HTTP requests
// Thought Process: This middleware provides detailed information about incoming HTTP requests, including the request method, URL, and headers, which aids in debugging and monitoring.
const httpRequestLogger = (req, res, next) => {
    const { method, url, headers } = req;
    const requestTime  = new Date().toISOString();  // Design Decision: Timestamp each log for better traceability of requests.

    // Logging the method and URL for each request
    console.log(`[${requestTime }] ${method} request to ${url}`);
    console.log('Headers:', headers);

    next();  // Pass control to the next middleware or route handler
};

module.exports = httpRequestLogger 
