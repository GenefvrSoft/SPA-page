const mysql = require('mysql2/promise');
const { sequelize } = require('./dbconfig');

//Modelos
const { modeloSPAS } = require('../models/spaModel');
const { modeloResenas } = require('../models/resenasModel')
const { modeloUsuario } = require('../models/usuarioModel')
const { modeloReservacion } = require('../models/reservasModel')
const { modeloServicios } = require('../models/serviciosModel')


function conexionDb() {
    mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    })
    .then((connection) => {  // Creando la base de datos
        connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`).then(() => {
            console.log('Base de datos creada exitosamente');
        })
    })
    .then( () => { // Creando la conexion a la base de datos
        sequelize.authenticate().then( () => {
            console.log('La conexion a la base de datos se ha realizado exitosamente');
        })
    })
    .then( () => { // Se crea la tabla 'usuarios'
        modeloUsuario.sync({ force: false })
        .then(() => console.log('Tabla usuarios creada'))
    })
    .then( () => { // Se crea la tabla 'SPAS'
        modeloSPAS.sync({ force: false })
        .then(() => console.log('Tabla SPAS creada'))
    })    
    .then( () => { // Se crea la tabla 'reservacion'
        modeloReservacion.sync({ force: false })
        .then(() => console.log('Tabla reservacion creada'))
    })
    .then( () => { // Se crea la tabla 'reseñas'
        modeloResenas.sync({ force: false })
        .then(() => console.log('Tabla reseñas creada'))
    })
    .then( () => { // Se crea la tabla 'servicios'
        modeloServicios.sync({ force: false })
        .then(() => console.log('Tabla servicios creada'))
    })
    .catch( (error) => {
        console.log('Incapaz de conectar a la base de datos: ', error.message);
    });
}

conexionDb();



