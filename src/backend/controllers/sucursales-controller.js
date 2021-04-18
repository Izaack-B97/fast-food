/**
 * Aqui estan las operaciones crud de la tabla producto
 * TODO: Validar los tipos de datos al momento de interactuar con la bd
 */

 const { getConnection } = require('../database');
 
 module.exports = {
 
    createSucursal: ( req, res ) => {        
        res.json({
            message: 'Creando nueva sucursal'
        });
    },

    getSucursales: ( req, res ) => {
        res.json({
            message: 'Todas las sucursales'
        });
    },

    getInfoSucursal: ( req, res ) => {
        res.json({
            message: 'Info sucursal'
        });
    },

    updateSucursal: ( req, res ) => {
        res.json({
            message: 'Sucursal Actualiza'
        });
    }
 };