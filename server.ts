const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
