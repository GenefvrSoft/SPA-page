const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/dbconfig");
const { modeloSPAS } = require("./spaModel")


const modeloServicios = sequelize.define('Servicios', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    descripcion_basico: DataTypes.STRING,
    descripcion_premium: DataTypes.STRING,
    precio_basico: DataTypes.STRING,
    precio_premium: DataTypes.STRING,
    precio_en_pareja: DataTypes.STRING,
});

modeloServicios.SPA = modeloServicios.belongsTo(modeloSPAS)


module.exports = { modeloServicios };