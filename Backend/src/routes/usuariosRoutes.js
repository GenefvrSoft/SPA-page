const express = require("express");
const router = express.Router();
const { registroUser, obtenerUsers, actualizarUser, actualizarRolUser, eliminarUser, iniciarSesion } = require("../controllers/usuarioControllers")


router.post('/registro-user', registroUser);
router.post('/iniciar-sesion', iniciarSesion)
router.get('/obtener-users', obtenerUsers);
router.put('/actualizar-user', actualizarUser);
router.put('/actualizar-role-user', actualizarRolUser);
router.delete('/eliminar-user/:id', eliminarUser)





module.exports = router;