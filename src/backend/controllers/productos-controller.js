module.exports = {

    createProduct: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'producto creado'
        });
    },

    getProduct: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'producto ejemplo'
        });
    },

    getProducts: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'todos los productos'
        });
    },

    updateProduct: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'producto actualizado'
        });
    },

    deleteProduct: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'producto eliminado'
        });
    }
};