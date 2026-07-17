# VIKINGOS GYM — Página informativa

Sitio web informativo creado con React, Vite y Tailwind CSS.

## Funciones

- Información del gimnasio, horarios, ubicación, equipo y videos.
- Formulario de contacto con dos opciones:
  - Enviar por correo a `santiagol59776@gmail.com` mediante FormSubmit.
  - Abrir WhatsApp con el mensaje preparado para el número `+52 56 2077 0243`.
- No utiliza backend propio, base de datos, XAMPP ni MySQL.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Después abre la dirección que muestre Vite, normalmente `http://localhost:5173`.

## Crear versión para publicar

```bash
npm run build
```

La carpeta generada será `dist` y puede publicarse en Netlify, Vercel o GitHub Pages.

## Nota sobre el correo

El envío por correo usa FormSubmit, por lo que la primera vez puede solicitar confirmar la dirección de correo desde el mensaje de activación que llega a la bandeja de entrada.
