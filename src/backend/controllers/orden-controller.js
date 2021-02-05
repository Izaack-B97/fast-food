module.exports = {

    createOrden: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'orden creada'
        });
    },

    getOrden: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'orden ejemplo'
        });
    },

    getOrdenes: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'todas las ordenes'
        });
    },

    updateOrden: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'orden actualizada'
        });
    },

    deleteOrden: ( req, res ) => {
        res.json({
            status: 'success',
            message: 'orden eliminada'
        });
    }
};