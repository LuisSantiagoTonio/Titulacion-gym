const bcrypt = require('bcryptjs');
const db = require('./config/db');

async function fixAdmin() {
  try {
    const hash = await bcrypt.hash('admin123', 10);
    console.log('Hash generado para admin123:', hash);

    // Verificar que el hash funciona
    const valid = await bcrypt.compare('admin123', hash);
    console.log('Verificación del hash:', valid ? '✅ Correcto' : '❌ Incorrecto');

    // Actualizar o insertar en la base de datos
    const [rows] = await db.query('SELECT * FROM administradores WHERE usuario = ?', ['admin']);
    if (rows.length > 0) {
      await db.query('UPDATE administradores SET password = ? WHERE usuario = ?', [hash, 'admin']);
      console.log('✅ Contraseña del usuario "admin" actualizada en la base de datos.');
    } else {
      await db.query('INSERT INTO administradores (usuario, password) VALUES (?, ?)', ['admin', hash]);
      console.log('✅ Usuario "admin" creado con la contraseña correcta.');
    }

    // Mostrar el hash final para actualizarlo también en schema.sql
    console.log('\n--- HASH FINAL ---');
    console.log(hash);

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    process.exit();
  }
}

fixAdmin();
