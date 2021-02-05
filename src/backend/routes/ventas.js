const express = require('express');
const router = express.Router();

// Acciones
const {
    createVenta,
    getVenta,
    getVentas,
    updateVenta,
    deleteVenta
} = require('../controllers/ventas-controller');

router.route('/ventas')
    .get( getVentas )
    .post( createVenta );

router.route('/ventas/:id')
    .get( getVenta )
    .put( updateVenta )
    .delete( deleteVenta );

module.exports = router;