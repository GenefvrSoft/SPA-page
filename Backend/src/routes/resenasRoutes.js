const express = require("express");
const { registroResena, resenasByID } = require("../controllers/resenasController")
const router = express.Router();



router.post('/registrar-resena', registroResena);
router.get('/obtener-resenas-by-id/:id', resenasByID);



module.exports = router;