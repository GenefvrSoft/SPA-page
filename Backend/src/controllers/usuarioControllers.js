const { generateToken } = require("../helpers/generarToken")
const { encryptPassword } = require("../helpers/passwordSecurity")
const { modeloUsuario } = require("../models/usuarioModel")



const registroUser = async (req, res) => {
    try {
        const data = req.body;
          
        const checkAccount = await modeloUsuario.findOne({where: {correo: data.correo}});
        if ( checkAccount ) return res.json({error: true, msg: 'Ya existe una cuenta registrada con ese correo.'});

        data.rol = 'usuario';
        data.password = await encryptPassword(data.password); // encriptar la clave del usuario
        const registro = await modeloUsuario.create(data); // se crea el registro
        delete registro.dataValues.password;
        const token = generateToken(registro.id); 
        res.json({msg: 'Registro exitoso', token, registro});
    } catch (error) {
        console.log(error.message)
    }
}

const iniciarSesion = async(req, res) => {
    try {
        const credenciales = req.body;

        const resp =await modeloUsuario.findOne({where: {correo: credenciales.correo}});
        if(!resp) return res.json({error: true, msg: 'Correo o cuenta invalida'});
        delete resp.dataValues.password;
        const token = generateToken(resp.id); 
        res.json({msg: 'Registro exitoso', token, cuenta: resp});        
    } catch (error) {
        console.log(error)
    }
}

const obtenerUsers = async (req, res) => {
    try {
        const users = await modeloUsuario.findAll({attributes: {exclude: ['password']}});
        res.json({msg: 'Registro exitoso', users});
    } catch (error) {
        console.log(error.message)
    }
}

const actualizarUser = async (req, res) => {
    try {
        const {id, ...data} = req.body;
        await modeloUsuario.update(data, {where: {id}});
        res.json({msg: 'Actualización exitosa'});
    } catch (error) {
        console.log(error.message)
    }
}

const actualizarRolUser = async (req, res) => {
    try {
        const {rol, id} = req.body;
        await modeloUsuario.update({rol}, {where: {id}});
        res.json({msg: `El rol ha sido marcado como: '${rol}'`});
    } catch (error) {
        console.log(error.message)
    }
}

const eliminarUser = async(req, res) => {
    try {
        const { id } = req.params;
        await modeloUsuario.destroy({where: {id}})
        res.json({mensaje: 'El registro ha sido eliminado exitosamente'});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    registroUser,
    obtenerUsers,
    actualizarUser,
    actualizarRolUser,
    eliminarUser,
    iniciarSesion
}