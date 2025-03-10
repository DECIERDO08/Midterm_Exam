const express = require('express'); // Import Express Module
const app = express(); //Create Express App
const port = 3000; // Set port

// Declare /test route 
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Write your full name'});
});

//Run server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
}); 
