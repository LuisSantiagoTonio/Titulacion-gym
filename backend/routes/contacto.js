const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    // Usamos FormSubmit.co para enviar el correo directamente a santiagol59776@gmail.com
    // sin requerir contraseñas de aplicación ni servidores SMTP.
    const response = await fetch('https://formsubmit.co/ajax/santiagol59776@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Nombre: nombre,
        Email: email,
        Mensaje: mensaje,
        _subject: `🏋️‍♂️ Nuevo mensaje de contacto VIKINGOS GYM - ${nombre}`,
        _replyto: email,
        _template: 'box' // Estilo limpio en caja de correo
      })
    });

    const data = await response.json();
    if (response.ok && (data.success === 'true' || data.success === true)) {
      return res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } else {
      console.error('❌ Error de FormSubmit:', data);
      return res.status(500).json({ message: 'No se pudo enviar el correo a través del servicio.' });
    }
  } catch (error) {
    console.error('❌ Error al enviar el correo:', error);
    return res.status(500).json({ message: 'Ocurrió un error al enviar el correo electrónico. Inténtelo más tarde.' });
  }
});

module.exports = router;
