const db = require('./config/db');

async function testConnection() {
  try {
    console.log('Intentando conectar a la base de datos...');
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('¡Conexión básica exitosa! Resultado:', rows[0].result);
    
    try {
      const [tables] = await db.query('SHOW TABLES');
      console.log('Tablas encontradas en la base de datos:', tables.map(t => Object.values(t)[0]));
      
      const [maquinas] = await db.query('SELECT COUNT(*) AS count FROM maquinas');
      console.log('Total de máquinas en la tabla "maquinas":', maquinas[0].count);
    } catch (dbErr) {
      console.error('Error al consultar tablas/datos. Posiblemente la base de datos está vacía o no tiene el esquema creado:', dbErr.message);
    }
  } catch (err) {
    console.error('Error crítico al conectar a MySQL:', err.message);
    console.error('Por favor, asegúrate de que XAMPP (MySQL) esté encendido y configurado en localhost:3306 sin contraseña.');
  } finally {
    process.exit();
  }
}

testConnection();
