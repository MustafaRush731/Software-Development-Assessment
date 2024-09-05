1. React.js Basics (To-Do List)

File: /frontend/components/Todo_List.js

Objective:
    - Build a simple React component that lets users add tasks to a to-do list.

Thought Process:

    - The idea was to create an interactive interface where users can add and manage tasks easily. React's useState was chosen because it’s great for handling dynamic content like this.

Design Decisions:
    - State Handling: useState was used to track the list of tasks and update the UI every time a new task is added.
    - Controlled Input: We made sure the input field is controlled by React so it stays in sync with the state of the component.
Approach:
    - Used useState to manage both the input and the task list.
    - Displayed the list by looping through the tasks stored in the state.
    - Cleared the input field after adding a task to keep things user-friendly.

Key Considerations:
    - Keeping the state updated when new tasks are added.
    - Making sure empty tasks don’t get added by checking the input value.

2. Next.js Routing

Files: /frontend/pages/index.js, /frontend/pages/about.js

Objective:

    - Set up client-side navigation between two pages using Next.js.

Thought Process:

    - We wanted a smooth way for users to switch between the home page and an "about" page without the whole page refreshing. Next.js’s routing system was a perfect fit for this.

Design Decisions:
    - Client-Side Navigation: Used Next.js’s Link component to allow users to navigate without reloading the page.
    - Page Structure: Organized the app into two pages, one for the to-do list (home) and one for displaying posts (about).

Approach:
    - Used the Link component to handle navigation between pages.
    - The home page (index.js) shows the to-do list, and the about.js page fetches and displays post data.

Key Considerations:
     - Ensuring navigation between pages is quick and seamless.
     - Making sure the about.js page fetches data efficiently using the useEffect hook.

3. API Integration
    File: /frontend/pages/about.js

Objective:

    - Fetch data from a mock API and display it on the "about" page.

Thought Process:

    - We needed to show how to fetch data from an API and display it in the app. We used the useEffect hook to run the API call when the component first loads.

Design Decisions:

    - Fetching Data: Used the useEffect hook to make sure the API call happens only once when the component mounts.
    - Managing Data: Used useState to store the data from the API and update the UI when the data is received.

Approach:
    - Used useEffect to fetch posts from the mock API.
    - Stored the fetched data in useState and displayed it as a list.

Key Considerations:
    - Ensuring the API call runs only once when the component mounts.
    - Dynamically displaying the data after it's fetched.

4. Node.js Server Setup

File: /backend/server.js

Objective:
    - Set up an Express server to handle requests for users and posts.

Thought Process:

    - We needed a simple server to manage requests for users and posts. Express was chosen because it's easy to set up and supports modular routing, which helps with organization.

Design Decisions:

    - Modular Routing: Grouped routes for users and posts separately for better code organization.
    - Middleware: Used express.json() to handle JSON requests, which is common for modern APIs.

Approach:
    - Set up the Express server and added middleware for parsing JSON and logging requests.
    - Created routes for users and posts and added them to the server.

Key Considerations:
    - Keeping the routes organized by splitting them into separate files.
    - Setting up global middleware to log all incoming requests.

5. Middleware (Request Logger)

File: /backend/middleware/requestLogger.js

Objective:

    - Implement middleware to log details about incoming requests.

Thought Process:

    - Logging requests is crucial for debugging and monitoring. The middleware needed to capture key information about each request, like the method, URL, and headers, without affecting how the server processes requests.

Design Decisions:
    - Global Middleware: Applied the logging middleware globally so every request gets logged.
    - Non-blocking: Made sure the middleware calls next() so it doesn’t block the request from moving forward.

Approach:
    - Logged the request method, URL, headers, and timestamp for each incoming request.
    - Applied the middleware to all routes in the Express app.

Key Considerations:
    - Making sure the middleware doesn’t interfere with how the server handles requests.
    - Capturing useful information like timestamps and headers for debugging.

6. Database Interaction (CRUD Operations)

Files: /backend/models/userModel.js, /backend/models/postModel.js

Objective:

    - Connect the server to PostgreSQL and implement CRUD operations for users and posts.

Thought Process:

    - We needed to add, update, retrieve, and delete user and post data in the database. Parameterized SQL queries were used to secure the operations and ensure clean data handling.

Design Decisions:

    - Parameterized Queries: Chose to use parameterized SQL queries to prevent SQL injection attacks.
    - Foreign Key Relationships: Foreign keys between users and posts ensure relational data integrity.

Approach:
    - Created functions to add, update, get, and delete users and posts in the database.
    - Used parameterized queries to prevent SQL injection and maintain security.

Key Considerations:
    - Ensuring that foreign keys link users and posts correctly for data integrity.
    - Handling errors properly when interacting with the database.

7. Database Schema Design
    Files: /backend/models/userModel.js, /backend/models/postModel.js

Objective:
    - Design a database schema that defines relationships between users, posts, and comments.

Thought Process:
    - We needed a schema that reflects the relationships between users, posts, and comments. Foreign keys were added to ensure referential integrity, and constraints were added to enforce data validity.

Design Decisions:

    - Foreign Keys: Used foreign keys to link users with their posts and comments, maintaining proper relationships.
    - Constraints: Added NOT NULL and UNIQUE constraints to fields like email to prevent duplicates and ensure data is valid.

Approach:
    - Designed tables for users, posts, and comments with foreign keys to link them.
    - Added constraints to keep the data valid and ensure referential integrity.

Key Considerations:
    - Making sure foreign keys properly link users to posts and comments.
    - Optimizing queries by adding indexed fields to improve performance.

8. SQL Queries

Files: /backend/models/postModel.js, /backend/models/userModel.js

Objective:
    - Write SQL queries to fetch posts by a user and count comments on a post.

Thought Process:
    - We needed efficient queries to get all posts by a specific user and count the number of comments on each post. We used SQL's SELECT and COUNT to get the data we needed.

Design Decisions:

    - Efficient Queries: Used SELECT to fetch posts by user ID and COUNT to tally comments, ensuring the queries are quick.
    - Security: All queries were parameterized to prevent SQL injection.

Approach:
    
    - Wrote SQL queries to get posts by user ID and count the number of comments on a post.
    - Used SELECT and COUNT SQL functions to efficiently retrieve the required data.

Key Considerations:
    - Writing queries that perform well with large datasets.
    - Securing the queries by using parameterized inputs to avoid SQL injection.