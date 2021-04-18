const express = require('express');
const router = express.Router();

const { createSucursal, getInfoSucursal, updateSucursal, getSucursales } = require('../controllers/sucursales-controller')

router.route('/')
    .get( getSucursales )
    .post( createSucursal );

router.route('/:id')
    .get( getInfoSucursal )
    .put( updateSucursal );

module.exports = router;