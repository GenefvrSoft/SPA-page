const { emailDeReservacion } = require("../helpers/emails")
const { modeloReservacion } = require("../models/reservasModel")



const registroReservacion = async (req, res) => {
    try {
        const {
            fecha,
            is_premium,
            UsuarioId,   
            correo_usuario
        } = req.body;
        const registro = await modeloReservacion.create({fecha, is_premium, UsuarioId});
        await emailDeReservacion(correo_usuario, is_premium)
        res.json({msg: 'Reservación agendada.', registro});
    } catch (error) {
        console.log(error.message)
    }
}


const getReservaciones = async (req, res) => { // obtener todas las reseñas de un SPA en especifico
    try {
        const reservaciones = await modeloReservacion.findAll({
            include: [
                {
                    association: modeloReservacion.USUARIO,
                    attributes: {exclude: ['password']}
                },
                {
                    association: modeloReservacion.SPA,
                }
            ]
        });
        res.json({reservaciones});
    } catch (error) {
        console.log(error.message)
    }
}


const eliminarReservacion = async(req, res) => {
    try {
        const { id } = req.params;
        await modeloReservacion.destroy({where: {id}})
        res.json({mensaje: 'La reservación ha sido eliminada del sistema.'});
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    registroReservacion,
    eliminarReservacion,
    getReservaciones
}