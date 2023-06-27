const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
require('./database/conexionDB');

const SPA_rutas = require('./routes/spaRoutes');
const rutasUsuario = require('./routes/usuariosRoutes');
const rutasResenas = require('./routes/resenasRoutes');
const rutasServicios = require('./routes/serviciosRoutes');
const rutasReservacion = require('./routes/reservasRoutes');


const PORT = process.env.PORT;
app.use(cors())
app.use(express.json());
app.use('/api', SPA_rutas);
app.use('/api', rutasUsuario);
app.use('/api', rutasResenas);
app.use('/api', rutasServicios);
app.use('/api', rutasReservacion);


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));