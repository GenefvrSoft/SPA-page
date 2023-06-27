const { modeloServicios } = require("../models/serviciosModel")


const registroServicio = async (req, res) => {
    try {
        const data = req.body;
        const registro = await modeloServicios.create(data);
        res.json({msg: 'Registro exitoso', registro});
    } catch (error) {
        console.log(error.message)
    }
}

const getServicioById = async (req, res) => {
    try {
        const SpaId = req.params.id;
        const servicio = await modeloServicios.findOne({where: {SpaId}});
        res.json({servicio});
    } catch (error) {
        console.log(error.message)
    }
}

const actualizarServicio = async(req, res) => {
    try {
        const {id, ...data} = req.body;
        await modeloServicios.update(data,  {where: {id}})
        res.json({mensaje: 'El registro ha sido actualizado exitosamente'});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    registroServicio,
    actualizarServicio,
    getServicioById
}