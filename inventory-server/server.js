const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    connectTimeout: 10000,
});

connection.connect(function (err) {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    connection.query(
        'SELECT * FROM login WHERE email = ?',
        [email],
        (error, results) => {
            if (error) {
                console.error('Query error:', error);
                res.status(500).json({ status: 'error', message: 'Internal Server Error' });
                return;
            }
            if (results.length > 0) {
                const user = results[0];
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        res.json({ status: 'success', message: 'Login successful' });
                    } else {
                        res.status(401).json({ status: 'error', message: 'Unauthorized' });
                    }
                });
            } else {
                res.status(401).json({ status: 'error', message: 'Unauthorized' });
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
