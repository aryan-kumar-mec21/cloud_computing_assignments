// Import the Express module
const express = require('express');
const app = express();

// Define a port
const port = 3000;

// Create a route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
