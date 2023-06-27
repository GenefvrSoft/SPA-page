const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/dbconfig");


const modeloSPAS = sequelize.define('Spas', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    horario_atencion: DataTypes.STRING, // horario de atencion De Lunes a Viernes, 7am hasta 4pm.
    servicio_en_pareja: DataTypes.BOOLEAN,
    ubicacion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    imagenes: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            return this.getDataValue('imagenes').split(';')
        },
        set(val) {
           this.setDataValue('imagenes',val.join(';'));
        },
    }
});

module.exports = { modeloSPAS };