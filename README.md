# VIKINGOS GYM — Web del gimnasio (React + Node.js + MySQL/XAMPP)

Proyecto completo con:
- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js + Express
- **Base de datos**: MySQL, administrada con XAMPP/phpMyAdmin
- Sección de **máquinas disponibles** con imágenes que vienen de la base de datos

## 1. Preparar la base de datos (XAMPP)

1. Abre el **Panel de control de XAMPP** y enciende **Apache** y **MySQL**.
2. Ve a `http://localhost/phpmyadmin`.
3. Haz clic en **Importar** → selecciona el archivo `backend/database/schema.sql` de este proyecto → **Continuar**.
   - Esto crea la base `gimnasio_db` con la tabla `maquinas` y datos de ejemplo (incluyendo URLs de imágenes).
4. (Opcional) Si quieres usar tus propias fotos: copia las imágenes a `backend/uploads/` y en la tabla `maquinas` pon en `imagen_url` algo como `/uploads/banca.jpg`.

## 2. Levantar el backend (Node.js)

```bash
cd backend
npm install
npm run dev
```

Por defecto se conecta a MySQL con usuario `root` y contraseña vacía (configuración estándar de XAMPP). Si tu XAMPP usa otra contraseña, edita `backend/config/db.js` o crea un archivo `.env` con:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=gimnasio_db
DB_PORT=3306
```

El backend quedará corriendo en `http://localhost:5000`.

## 3. Levantar el frontend (React)

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## Endpoints de la API

| Método | Ruta                     | Descripción                          |
|--------|--------------------------|---------------------------------------|
| GET    | /api/maquinas            | Lista todas las máquinas              |
| GET    | /api/maquinas/:id        | Obtiene una máquina                   |

## Estructura del proyecto

```
gym-app/
├── backend/
│   ├── config/db.js          # Conexión a MySQL
│   ├── routes/machines.js    # Listado de máquinas
│   ├── database/schema.sql   # Script para importar en phpMyAdmin
│   ├── uploads/               # Carpeta para fotos propias
│   └── server.js
└── frontend/
    ├── src/
    │   ├── api/api.js         # Llamadas fetch al backend
    │   ├── components/        # Navbar, Hero, Machines
    │   └── App.jsx
    ├── tailwind.config.js
    └── index.html
```

## Notas

- Si la sección de máquinas muestra un error de conexión, revisa que: (1) Apache y MySQL estén encendidos en XAMPP, (2) el backend esté corriendo (`npm run dev` dentro de `backend/`), y (3) el puerto 5000 no esté ocupado por otra app.
- Las imágenes de ejemplo en `schema.sql` apuntan a fotos de stock públicas, solo para que veas el diseño funcionando. Sustitúyelas por las fotos reales de tu gimnasio.
