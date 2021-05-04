
const { getConnection } =  require('../database');

module.exports = {
 
    getAlmacen: ( req, res ) => {
        res.json('Todos los productos en almacen');
    },
    createAlmacenProducto: ( req, res ) => {
        res.json('Producto en almacen creado')
    },
    getProductoAlmacen:  ( req, res ) => {
        res.json('Producto en almacen');
    },
    updateAlmacenProducto: ( req, res ) => {
        res.json('Actualizado');
    },
    deleteAlmacenProducto: ( req, res ) => {
        res.json('Producto en almacen eliminado');
    },
    
 };