const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/dbconfig");
const { modeloSPAS } = require("./spaModel")
const { modeloUsuario } = require("./usuarioModel")


const modeloResenas = sequelize.define('Resenas', { // Modelo de las reseñas
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    descripcion: DataTypes.STRING,
    calificacion: DataTypes.INTEGER,
});

modeloResenas.USUARIO = modeloResenas.belongsTo(modeloUsuario);
modeloResenas.SPA = modeloResenas.belongsTo(modeloSPAS);



module.exports = { modeloResenas };