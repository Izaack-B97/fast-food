const express = require('express');
const router = express.Router();

const {
    createEmpleado, getInfoEmpleado, updateEmpleado, getEmpleados
} = require('../controllers/admin-empleados-controller')

router.route('/')
    .get( getEmpleados )
    .post( createEmpleado );

router.route('/:id')
    .get( getInfoEmpleado )
    .put( updateEmpleado );

module.exports = router;
