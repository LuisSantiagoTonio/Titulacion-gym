# Vikingos Gym — página web estática

Aplicación informativa responsiva desarrollada con React, Vite y Tailwind CSS. No utiliza backend ni base de datos.

## Ejecutar en la computadora

```bash
npm install
npm run dev
```

Vite mostrará una dirección local, normalmente `http://localhost:5173/`.

## Compilar para producción

```bash
npm run build
```

## Publicar en Netlify

- Build command: `npm run build`
- Publish directory: `dist`

El archivo `netlify.toml` ya contiene esta configuración.

## Apartados incluidos

Inicio, sobre nosotros, misión y visión, servicios y membresías, equipo, galería, videos, horarios, guías, testimonios demostrativos, aliados y enlaces externos, contacto por correo y WhatsApp, botones de Facebook, Instagram, TikTok y YouTube, aviso de privacidad y términos de uso.

## Nota sobre contenido

Las fotografías de la galería y los testimonios son contenido demostrativo para el proyecto escolar. Antes de utilizar la página con fines comerciales, deben sustituirse por fotografías y opiniones verificadas del gimnasio.

## Formulario de contacto mediante Netlify Forms

El formulario ya no utiliza FormSubmit. Cada mensaje se guarda directamente en el panel de Netlify.

Después de publicar una nueva versión:

1. Envía un mensaje de prueba desde la página publicada.
2. En Netlify abre `Forms` y selecciona `contacto-vikingos` para comprobar la entrada.
3. Para recibir cada mensaje en el correo, entra a `Project configuration > Notifications > Emails and webhooks > Form submission notifications`.
4. Selecciona `Add notification > Email notification`, indica `santiagol59776@gmail.com` y elige el formulario `contacto-vikingos`.

No se necesita backend, base de datos ni activación mediante un correo externo.
