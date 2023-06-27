const express = require("express");
const { registroServicio, actualizarServicio, getServicioById } = require("../controllers/serviciosControllers")
const router = express.Router();



router.post('/registrar-servicio', registroServicio);
router.get('/obtener-servicio-by-id/:id', getServicioById);
router.put('/actualizar-servicio', actualizarServicio)



module.exports = router;