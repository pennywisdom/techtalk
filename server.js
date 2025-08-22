const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main presentation page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'OneStack Deploy Tech Talk is running!',
        timestamp: new Date().toISOString() 
    });
});

// Handle 404s
app.use('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 OneStack Deploy Tech Talk is running on port ${PORT}`);
    console.log(`📖 Open your browser to http://localhost:${PORT}`);
    console.log(`🎯 Ready to wow your audience!`);
});
