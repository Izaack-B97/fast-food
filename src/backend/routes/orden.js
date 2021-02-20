const express = require('express');
const router = express.Router();

// Acciones
const {
    createOrden,
    getOrden,
    getOrdenes,
    updateOrden,
    deleteOrden,
    getTotalInfoOrdenes,
    getAllOrdenesWithInfo
} = require('../controllers/orden-controller');

router.route('/ordenes')
    .get( getOrdenes )
    .post( createOrden );

router.route('/ordenes/:id')
    .get( getOrden )
    .put( updateOrden )
    .delete( deleteOrden );

router.get('/ordenes/info-general/:id', getTotalInfoOrdenes );
router.get('/ordenes/informacion/general/todas', getAllOrdenesWithInfo )

module.exports = router;