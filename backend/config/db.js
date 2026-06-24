const mysql = require('mysql2');

// Configuración por defecto de XAMPP:
// host: localhost, usuario: root, password: '' (vacío), puerto 3306
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'gimnasio_db',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool.promise();
