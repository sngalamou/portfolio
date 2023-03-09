const express = require('express');
const app = express();
const port = 3000;

// Serve static files in the public directory
app.use(express.static('public'));

// Define routes for each page
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + 'public/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + 'public/contact.html');
});

app.get('/experience', (req, res) => {
  res.sendFile(__dirname + 'public/exp.html');
});

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + 'public/exp.html');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});