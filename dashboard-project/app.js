const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Use the dashboard route
const dashboardRoute = require('./routes/dashboard'); // Correct path
app.use('/', dashboardRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
