const express = require('express');
const router = express.Router();
const db = require('../config/db');

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

module.exports = router;
