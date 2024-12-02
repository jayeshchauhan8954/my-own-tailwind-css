const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the CSS file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'styles.css'));
});

app.listen(PORT, () => {
    console.log(`CSS file is available at http://localhost:${PORT}`);
});
