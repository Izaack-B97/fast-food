const express = require('express');
const router = express.Router();

// Acciones
const {
    createPartida,
    getPartida,
    getPartidas,
    updatePartida,
    deletePartida
} = require('../controllers/partidas-controller');

router.route('/partidas')
    .get( getPartidas )
    .post( createPartida );

router.route('/partidas/:id')
    .get( getPartida )
    .put( updatePartida )
    .delete( deletePartida );

module.exports = router;