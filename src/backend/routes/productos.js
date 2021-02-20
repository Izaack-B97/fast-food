const express = require('express');
const router = express.Router();

// Acciones
const {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/productos-controller');

router.route('/productos')
    .get( getProducts )
    .post( createProduct );

router.route('/productos/:id')
    .get( getProduct )
    .put( updateProduct )
    .delete( deleteProduct );

module.exports = router;