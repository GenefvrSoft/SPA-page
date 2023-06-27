const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/dbconfig");
const { modeloUsuario } = require("./usuarioModel")


const modeloReservacion = sequelize.define('Reservas', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    fecha: DataTypes.STRING,
    is_premium: DataTypes.BOOLEAN,
});

modeloReservacion.USUARIO = modeloReservacion.belongsTo(modeloUsuario);


module.exports = { modeloReservacion };