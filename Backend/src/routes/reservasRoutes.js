const express = require("express");
const { registroReservacion, eliminarReservacion, getReservaciones } = require("../controllers/reservacionController")
const { verifyToken } = require("../middlewares/authToken")
const router = express.Router();



router.post('/registrar-reservacion', verifyToken, registroReservacion);
router.get('/obtener-reservaciones', getReservaciones)
router.delete('/cancelar-reservacion/:id', eliminarReservacion)


module.exports = router;