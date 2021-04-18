/**
 * Aqui estan las operaciones crud de la tabla producto
 * TODO: Validar los tipos de datos al momento de interactuar con la bd
 */

 const { getConnection } = require('../database');
 
 module.exports = {
 
    createEmpleado: ( req, res ) => {        
        res.json({
            message: 'Creando nuevo empleado'
        });
    },

    getEmpleados: ( req, res ) => {
        res.json({
            message: 'Todos los empleados'
        });
    },

    getInfoEmpleado: ( req, res ) => {
        res.json({
            message: 'Info del empleado'
        });
    },

    updateEmpleado: ( req, res ) => {
        res.json({
            message: 'Empleado actualiza'
        });
    },
    
 };