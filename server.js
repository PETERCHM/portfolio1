const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the about.html file
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Serve the experiences.html file
app.get('/experiences', (req, res) => {
    res.sendFile(path.join(__dirname, 'experiences.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
