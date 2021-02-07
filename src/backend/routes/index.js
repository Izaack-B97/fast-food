// Aqui cargaremos todas las rutas

const express = require('express');
const router = express.Router();

router.use( require('./productos') );
router.use( require('./orden') );
router.use( require('./partidas') );

module.exports = router;
