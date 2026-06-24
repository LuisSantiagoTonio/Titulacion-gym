const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const JWT_SECRET = process.env.JWT_SECRET || 'titulacion_gym_secret_key_2026';

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
  }

  try {
    // Buscar el administrador en la BD
    const [rows] = await db.query('SELECT * FROM administradores WHERE usuario = ?', [usuario]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    const admin = rows[0];

    // Comparar la contraseña ingresada con la hasheada
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Firmar el token JWT
    const token = jwt.sign(
      { id: admin.id, usuario: admin.usuario },
      JWT_SECRET,
      { expiresIn: '8h' } // El token expira en 8 horas
    );

    res.json({
      token,
      usuario: admin.usuario,
      message: 'Inicio de sesión exitoso'
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
