const mysql=require("mysql2")
require("dotenv").config()
const db = mysql.createConnection({
    host: process.env.DB_HOST,       // Get host from .env
    user: process.env.DB_USER,       // Get user from .env
    password: process.env.DB_PASSWORD, // Get password from .env
    database: process.env.DB_NAME    // Get database name from .env
});
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.message);
      return;
    }
    console.log('Connected to MySQL!');
  });

