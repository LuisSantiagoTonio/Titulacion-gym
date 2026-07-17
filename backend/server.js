require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./config/db');
const machinesRoutes = require('./routes/machines');
const contactoRoutes = require('./routes/contacto');

const app = express();

app.use(cors());
app.use(express.json());

// Sirve imágenes locales si guardas fotos en backend/uploads
// y las referencias en la BD como "/uploads/nombre.jpg"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/maquinas', machinesRoutes);
app.use('/api/contacto', contactoRoutes);

app.get('/', (req, res) => {
  res.send('API del gimnasio funcionando correctamente 💪');
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

