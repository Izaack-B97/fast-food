const express = require('express');
const router = express.Router();

const { 
    getReporteHamburguesas, 
    getReporteDogos ,
    getReporteEspecialidades,
    getReportePerches
} = require('../controllers/reporte.controller');
const { route } = require('./orden');


router.get( '/hamburguesas', getReporteHamburguesas );
router.get( '/dogos', getReporteDogos );
router.get( '/especialidades', getReporteEspecialidades );
router.get( '/percherones', getReportePerches );

module.exports = router;