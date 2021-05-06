
const { getConnection } =  require('../database');

module.exports = {
 
    getAlmacen: async ( req, res ) => {
        try {
            const query = `SELECT * FROM almacen`;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener el almacen: ' + error
            });
        }
    },
    createAlmacenProducto: async ( req, res ) => {
        try {
            const query = `
                INSERT INTO almacen 
                    (
                        producto,
                        tipo_producto,
                        cantidad
                    )
                VALUES
                    (
                        "${ req.body.producto }", 
                        "${ req.body.tipo_producto }",
                        ${ req.body.cantidad }
                    );
            `;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al crear producto en almacen: ' + error
            });
        }
    },
    getProductoAlmacen: async ( req, res ) => {
        try {
            const query = `SELECT * FROM almacen WHERE id_almacen = ${ req.params.id }`;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener el producto en almacen: ' + error
            });
        }
    },
    updateAlmacenProducto: async ( req, res ) => {
        console.log( req.body )
        try {
            const query = `
                UPDATE almacen SET
                    producto = "${ req.body.producto }",
                    tipo_producto = "${ req.body.tipo_producto }",
                    cantidad = ${ req.body.cantidad }
                WHERE id_almacen = ${ req.params.id };
            `;

            const conn = await getConnection();
            const result = await conn.query( query );

            res.json( result );

        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al actualizar producto en almacen: ' + error
            });   
        }
    },
    deleteAlmacenProducto: async ( req, res ) => {
        try {
            const conn = await getConnection();
            const result = await conn.query(`DELETE FROM almacen WHERE id_almacen = ${ req.params.id };`);
            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al eliminar producto en almacen: ' + error
            });
        }
    },
    
};