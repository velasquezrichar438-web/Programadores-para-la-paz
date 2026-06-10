const express = require('express');
const app = express();

app.use(express.json());

// GET (esto es lo que te faltaba)
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});

// POST registro
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre,
    mensaje
  });
});

// POST incidencia
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo,
    descripcion
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});