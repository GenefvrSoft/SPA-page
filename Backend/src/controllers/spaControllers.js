const { modeloSPAS } = require("../models/spaModel")



const registroSpa = async (req, res) => {
    try {
        const data = req.body;
        const registro = await modeloSPAS.create(data);
        res.json({msg: 'Registro exitoso', registro});
    } catch (error) {
        console.log(error.message)
    }
}

const obtenerSPAS = async (req, res) => {
    try {
        const spas = await modeloSPAS.findAll({});
        res.json({spas});
    } catch (error) {
        console.log(error.message)
    }
}

const actualizarSpa = async(req, res) => {
    try {
        const {nuevasImagenes = [], id, ...data} = req.body;
        data.imagenes = [...nuevasImagenes, ...data.imagenes];
        await modeloSPAS.update(data,  {where: {id}})
        res.json({mensaje: 'El registro ha sido actualizado exitosamente'});
    } catch (error) {
        console.log(error.message);
    }
}

const eliminarSpa = async(req, res) => {
    try {
        const { id } = req.params;
        await modeloSPAS.destroy({where: {id}})
        res.json({mensaje: 'El registro ha sido eliminado exitosamente'});
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = {
    registroSpa,
    obtenerSPAS,
    actualizarSpa,
    eliminarSpa
}