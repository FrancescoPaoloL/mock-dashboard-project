const http = require('http');
const fs = require('fs');
const path = require('path');

// Helper function to serve static files
function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
}

// Create the server
const server = http.createServer((req, res) => {
  const baseDir = path.join(__dirname, '../public');

  if (req.url === '/') {
    // Serve the index.html file
    serveFile(res, path.join(baseDir, 'index.html'), 'text/html');
  } else if (req.url.endsWith('.css')) {
    // Serve CSS files
    serveFile(res, path.join(baseDir, req.url), 'text/css');
  } else if (req.url.endsWith('.js')) {
    // Serve JavaScript files
    serveFile(res, path.join(baseDir, req.url), 'application/javascript');
  } else {
    // Handle 404 for unknown routes
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
