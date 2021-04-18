// Aqui cargaremos todas las rutas

const express = require('express');
const router = express.Router();

router.use( require('./productos') );
router.use( require('./orden') );
router.use( require('./partidas') );
router.use( '/reportes', require('./reportes') );
router.use( '/admin/empleados', require('./admin-empleados') );
router.use( '/admin/sucursales', require('./sucursales') );

module.exports = router;
