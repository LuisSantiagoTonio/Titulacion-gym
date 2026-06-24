const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'titulacion_gym_secret_key_2026';

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });
  }

  // Se espera el formato: Bearer <token>
  const tokenParts = authHeader.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Formato de token inválido. Debe ser Bearer <token>.' });
  }

  const token = tokenParts[1];

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Contiene { id, usuario }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido o expirado.' });
  }
};
