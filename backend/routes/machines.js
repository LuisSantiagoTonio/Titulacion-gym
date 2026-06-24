const express = require('express');
const router = express.Router();
const db = require('../config/db');
const auth = require('../middleware/auth');

// GET /api/maquinas  -> lista todas las máquinas
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM maquinas ORDER BY id ASC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/maquinas/:id -> una máquina por id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM maquinas WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Máquina no encontrada' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/maquinas -> crear nueva máquina
router.post('/', auth, async (req, res) => {
  const { nombre, descripcion, categoria, imagen_url, disponible } = req.body;
  if (!nombre || !categoria) {
    return res.status(400).json({ message: 'nombre y categoria son obligatorios' });
  }
  try {
    const [result] = await db.query(
      'INSERT INTO maquinas (nombre, descripcion, categoria, imagen_url, disponible) VALUES (?, ?, ?, ?, ?)',
      [nombre, descripcion || null, categoria, imagen_url || null, disponible ?? true]
    );
    res.status(201).json({ id: result.insertId, message: 'Máquina creada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/maquinas/:id -> actualizar máquina
router.put('/:id', auth, async (req, res) => {
  const { nombre, descripcion, categoria, imagen_url, disponible } = req.body;
  try {
    await db.query(
      'UPDATE maquinas SET nombre = ?, descripcion = ?, categoria = ?, imagen_url = ?, disponible = ? WHERE id = ?',
      [nombre, descripcion, categoria, imagen_url, disponible, req.params.id]
    );
    res.json({ message: 'Máquina actualizada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/maquinas/:id -> eliminar máquina
router.delete('/:id', auth, async (req, res) => {
  try {
    await db.query('DELETE FROM maquinas WHERE id = ?', [req.params.id]);
    res.json({ message: 'Máquina eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
