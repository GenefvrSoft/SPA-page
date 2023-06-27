const express = require("express");
const router = express.Router();
const { registroSpa, obtenerSPAS, actualizarSpa, eliminarSpa } = require("../controllers/spaControllers")



router.post('/registro-spa', registroSpa);
router.get('/obtener-spas', obtenerSPAS);
router.put('/actualizar-spa', actualizarSpa);
router.delete('/eliminar-spa/:id', eliminarSpa)






module.exports = router;