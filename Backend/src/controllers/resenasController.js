const { modeloResenas } = require("../models/resenasModel")


const registroResena = async (req, res) => {
    try {
        const data = req.body;
        const registro = await modeloResenas.create(data);
        res.json({msg: 'Registro exitoso', registro});
    } catch (error) {
        console.log(error.message)
    }
}


const resenasByID = async (req, res) => { // obtener todas las reseñas de un SPA en especifico
    try {
        const { id: SpaId } = req.params;
        const registro = await modeloResenas.findAll({
            where: {SpaId},
            include: [
                {
                    association: modeloResenas.USUARIO,
                    attributes: {exclude: ['password']}
                }
            ]
        });
        res.json({msg: 'Registro exitoso', registro});
    } catch (error) {
        console.log(error.message)
    }
}




module.exports = {
    registroResena, 
    resenasByID
}