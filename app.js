// Import the Express module
const express = require('express');
const app = express();

// Define a port
const port = 3000;

// Create a route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello from aryan-kumar-mec21 node.js application deployed on Render!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
