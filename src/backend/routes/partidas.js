const express = require('express');
const router = express.Router();

// Acciones
const {
    createPartida,
    getPartida,
    getPartidas,
    updatePartida,
    deletePartida,
    getPartidasByOrden
} = require('../controllers/partidas-controller');

router.route('/partidas')
    .get( getPartidas )
    .post( createPartida );

router.route('/partidas/:id')
    .get( getPartida )
    .put( updatePartida )
    .delete( deletePartida );

router.route('/partidas/orden/:id')
    .get( getPartidasByOrden );

module.exports = router;