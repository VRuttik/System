const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3307;

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,  // Assuming your MySQL server is running on port 3307
    user: 'root',
    password: 'Vruttik8460%',
    database: 'inventorysystem'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Define API route to handle user signup
app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;
    const sql = 'INSERT INTO login (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ error: 'Error inserting data' });
            return;
        }
        console.log('User signed up successfully.');
        res.status(200).json({ message: 'User signed up successfully' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
