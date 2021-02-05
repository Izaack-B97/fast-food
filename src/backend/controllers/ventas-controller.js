module.exports = {

    createVenta: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'venta guardada'
        });
    },

    getVenta: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'venta ejemplo'
        });
    },

    getVentas: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'todas las ventas'
        });
    },

    updateVenta: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'venta actualizada'
        });
    },

    deleteVenta: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'venta eliminada'
        });
    }
};