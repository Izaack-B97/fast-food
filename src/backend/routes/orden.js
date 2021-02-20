const express = require('express');
const router = express.Router();

// Acciones
const {
    createOrden,
    getOrden,
    getOrdenes,
    updateOrden,
    deleteOrden,
    getTotalInfoOrdenes
} = require('../controllers/orden-controller');

router.route('/ordenes')
    .get( getOrdenes )
    .post( createOrden );

router.route('/ordenes/:id')
    .get( getOrden )
    .put( updateOrden )
    .delete( deleteOrden );

router.get('/ordenes/info-general/:id', getTotalInfoOrdenes ); 

module.exports = router;