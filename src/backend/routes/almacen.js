const express = require('express');
const router = express.Router();

// Acciones
const { 
    getAlmacen, 
    createAlmacenProducto, 
    getProductoAlmacen, 
    updateAlmacenProducto, 
    deleteAlmacenProducto, 
    getTiposAlmacen 
} = require('../controllers/almacen-controller');

router.route('/')
    .get( getAlmacen )
    .post( createAlmacenProducto );

router.route('/:id')
    .get( getProductoAlmacen )
    .put( updateAlmacenProducto )
    .delete( deleteAlmacenProducto );


router.route('/todos/tipos_productos')
    .get( getTiposAlmacen );
module.exports = router;