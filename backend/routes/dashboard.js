const express = require('express');
const router = express.Router();
const db = require('../config/db');
const auth = require('../middleware/auth');

// GET /api/dashboard/stats -> estadísticas generales para el dashboard
router.get('/stats', auth, async (req, res) => {

  try {
    const [[{ totalMaquinas }]] = await db.query('SELECT COUNT(*) AS totalMaquinas FROM maquinas');
    const [[{ disponibles }]] = await db.query('SELECT COUNT(*) AS disponibles FROM maquinas WHERE disponible = 1');
    const [[{ totalUsuarios }]] = await db.query('SELECT COUNT(*) AS totalUsuarios FROM usuarios');
    const [[{ premium }]] = await db.query("SELECT COUNT(*) AS premium FROM usuarios WHERE membresia = 'Premium'");
    const [porCategoria] = await db.query(
      'SELECT categoria, COUNT(*) AS cantidad FROM maquinas GROUP BY categoria ORDER BY cantidad DESC'
    );

    res.json({
      totalMaquinas,
      disponibles,
      noDisponibles: totalMaquinas - disponibles,
      totalUsuarios,
      membresiasPremium: premium,
      porCategoria,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
