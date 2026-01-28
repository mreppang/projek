const mysql = require('mysql2/promise');  
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0  
});

pool.getConnection()
  .then((connection) => {
    console.log('Koneksi database berhasil!');
    connection.release();
  })
  .catch((err) => {
    console.error('Koneksi database gagal:', err);
  });

module.exports = pool; 