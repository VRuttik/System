const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5000;

// Create a MySQL connection
const db = mysql.createConnection({
    host:'localhost3307',
    user:'root',
    password:'Vruttik8460%',
    database:'inventorysystem'
});

db.connect((err) =>{
    if(err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Define a text route
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${5000}`);
})