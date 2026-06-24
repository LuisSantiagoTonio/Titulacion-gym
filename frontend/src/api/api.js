const API_URL = 'http://localhost:5000/api';

function getHeaders() {
  const token = localStorage.getItem('admin_token');
  const headers = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

export async function login(usuario, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, password }),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Error al iniciar sesión');
  }
  return res.json();
}

export async function getMaquinas() {
  const res = await fetch(`${API_URL}/maquinas`);
  if (!res.ok) throw new Error('No se pudieron cargar las máquinas');
  return res.json();
}

export async function getDashboardStats() {
  const res = await fetch(`${API_URL}/dashboard/stats`, {
    headers: getHeaders(),
  });
  if (res.status === 401) {
    localStorage.removeItem('admin_token');
    window.location.href = '/login';
    throw new Error('Sesión expirada. Por favor inicia sesión nuevamente.');
  }
  if (!res.ok) throw new Error('No se pudieron cargar las estadísticas');
  return res.json();
}

export async function createMaquina(maquina) {
  const res = await fetch(`${API_URL}/maquinas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getHeaders(),
    },
    body: JSON.stringify(maquina),
  });
  if (res.status === 401) {
    localStorage.removeItem('admin_token');
    window.location.href = '/login';
    throw new Error('Sesión expirada. Por favor inicia sesión nuevamente.');
  }
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'No se pudo crear la máquina');
  }
  return res.json();
}

export async function updateMaquina(id, maquina) {
  const res = await fetch(`${API_URL}/maquinas/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...getHeaders(),
    },
    body: JSON.stringify(maquina),
  });
  if (res.status === 401) {
    localStorage.removeItem('admin_token');
    window.location.href = '/login';
    throw new Error('Sesión expirada. Por favor inicia sesión nuevamente.');
  }
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'No se pudo actualizar la máquina');
  }
  return res.json();
}

export async function deleteMaquina(id) {
  const res = await fetch(`${API_URL}/maquinas/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  if (res.status === 401) {
    localStorage.removeItem('admin_token');
    window.location.href = '/login';
    throw new Error('Sesión expirada. Por favor inicia sesión nuevamente.');
  }
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'No se pudo eliminar la máquina');
  }
  return res.json();
}

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
      _subject: `🏋️‍♂️ Nuevo mensaje de contacto HIERRO GYM - ${nombre}`,
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

