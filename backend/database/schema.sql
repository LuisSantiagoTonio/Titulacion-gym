-- ============================================
-- Base de datos: gimnasio_db
-- Importar este archivo desde phpMyAdmin (XAMPP)
-- ============================================

CREATE DATABASE IF NOT EXISTS gimnasio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE gimnasio_db;

-- Tabla de máquinas del gimnasio
CREATE TABLE IF NOT EXISTS maquinas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  categoria VARCHAR(50) NOT NULL,
  imagen_url VARCHAR(255),
  disponible BOOLEAN DEFAULT TRUE,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- ============================================
-- Datos de ejemplo
-- Las imágenes son URLs públicas de muestra.
-- Sustitúyelas por las fotos reales de tu gimnasio
-- (puedes subirlas a backend/uploads y usar
-- "/uploads/nombre-archivo.jpg" como imagen_url)
-- ============================================

INSERT INTO maquinas (nombre, descripcion, categoria, imagen_url, disponible) VALUES
('Caminadora Pro 3000', 'Caminadora eléctrica con inclinación ajustable y monitor de ritmo cardiaco.', 'Cardio', 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600', TRUE),
('Bicicleta Estática Spin', 'Bicicleta de spinning con resistencia magnética silenciosa.', 'Cardio', 'https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=600', TRUE),
('Elíptica Avanzada', 'Entrenamiento de bajo impacto para piernas y brazos.', 'Cardio', 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600', FALSE),
('Press de Banca', 'Banco con barra olímpica para pecho.', 'Fuerza', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600', TRUE),
('Multiestación de Poleas', 'Estación con poleas ajustables para múltiples ejercicios.', 'Fuerza', 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=600', TRUE),
('Rack de Sentadillas', 'Jaula de potencia para sentadillas y press militar.', 'Fuerza', 'https://images.unsplash.com/photo-1593476123561-9516f2097158?w=600', TRUE),
('Remo Concept', 'Máquina de remo para espalda y cardio combinado.', 'Cardio', 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=600', TRUE),
('Prensa de Piernas', 'Máquina inclinada para cuádriceps y glúteos.', 'Fuerza', 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600', FALSE),
('Mancuernas (set completo)', 'Set de mancuernas de 1 a 50 kg.', 'Peso Libre', 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=600', TRUE);
