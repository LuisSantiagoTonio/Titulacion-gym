export async function sendContacto(nombre, email, mensaje) {
  const res = await fetch('https://formsubmit.co/ajax/santiagol59776@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: nombre,
      email: email,
      message: mensaje,
      _subject: `🏋️‍♂️ Nuevo mensaje de contacto VIKINGOS GYM - ${nombre}`,
      _replyto: email,
      _template: 'box'
    }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'No se pudo enviar el mensaje');
  }

  const data = await res.json();
  if (data.success !== 'true' && data.success !== true) {
    throw new Error(data.message || 'No se pudo enviar el correo. Intenta de nuevo.');
  }
  return data;
}

