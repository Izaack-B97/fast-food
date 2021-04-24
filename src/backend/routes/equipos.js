const express = require('express');
const router = express.Router();

// Acciones
const { getEquipos } = require('../controllers/equipos');

router.get('/', getEquipos );

module.exports = router;