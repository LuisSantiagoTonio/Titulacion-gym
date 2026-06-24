require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./config/db');
const machinesRoutes = require('./routes/machines');
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');
const contactoRoutes = require('./routes/contacto');

const app = express();

app.use(cors());
app.use(express.json());

// Sirve imágenes locales si guardas fotos en backend/uploads
// y las referencias en la BD como "/uploads/nombre.jpg"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/maquinas', machinesRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contacto', contactoRoutes);

app.get('/', (req, res) => {
  res.send('API del gimnasio funcionando correctamente 💪');
});

// Función para inicializar la base de datos de manera automatizada
async function initDb() {
  const bcrypt = require('bcryptjs');
  try {
    // Crear tabla de administradores si no existe
    await db.query(`
      CREATE TABLE IF NOT EXISTS administradores (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Crear administrador por defecto si la tabla está vacía
    const [rows] = await db.query('SELECT COUNT(*) AS count FROM administradores');
    if (rows[0].count === 0) {
      // Hashear la contraseña en tiempo real para garantizar que sea válida
      const defaultHash = await bcrypt.hash('admin123', 10);
      await db.query('INSERT INTO administradores (usuario, password) VALUES (?, ?)', ['admin', defaultHash]);
      console.log('🔑 Usuario administrador inicial creado automáticamente (usuario: admin, contraseña: admin123)');
    }
  } catch (err) {
    console.error('❌ Error al inicializar la base de datos:', err.message);
  }
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await initDb();
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

