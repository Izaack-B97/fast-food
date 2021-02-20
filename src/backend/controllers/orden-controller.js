/**
 * Aqui estan las operaciones crud de la tabla ordenes
 * TODO: Validar los datos que interactuan con la bd
 */

const { getConnection } =  require('../database');

module.exports = {

    createOrden: async ( req, res ) => {
        try {

            const query = `
                INSERT INTO orden 
                    (total_pagar, especificacion_orden)
                VALUES
                    (${ req.body.total_pagar }, 
                    "${ req.body.especificacion_orden }");
            `;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al crear producto: ' + error
            });
        }
    },

    getOrden: async ( req, res ) => {
        try {
            const conn = await getConnection();
            const result = await conn.query(`SELECT * FROM orden WHERE id_orden = ${ req.params.id };`);

            if ( result.length === 0 ) {
                res.json({
                    status: 'failed',
                    message: 'La orden no existe'
                });
            } else {
                res.json( result );
            }
        

        } catch (error) {
            res.json({
                status: 'Failed',
                message: 'Error al obtener los productos: ' + error
            });
        }
    },

    getOrdenes: async ( req, res ) => {
        try {
            
            const conn = await getConnection();
            const result = await conn.query(`SELECT * FROM orden`);
            res.json( result );

        } catch (error) {
            res.json({
                status: 'Failed',
                message: 'Error al obtener los ordenes: ' + error
            });
        }
    },

    updateOrden: async ( req, res ) => {
        try {

            console.log( req.body )

            const query = `
                UPDATE orden SET
                total_pagar = ${ req.body.total_pagar },
                especificacion_orden = "${ req.body.especificacion_orden }"
                WHERE id_orden = ${ req.params.id };
            `;

            const conn = await getConnection();
            const result = await conn.query( query );

            res.json( result );

        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al actualizar producto: ' + error
            });   
        }
    },

    deleteOrden: async ( req, res ) => {
        try {
            const conn = await getConnection();
            const result = await conn.query(`DELETE FROM orden WHERE id_orden = ${ req.params.id };`);
            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al eliminar producto: ' + error
            });
        }
    },

    getTotalInfoOrdenes: async ( req, res ) => {
        try {
            const query = `
                SELECT 
                    orden.id_orden, 
                    orden.especificacion_orden, 
                    partida.cantidad, 
                    producto.nombre_producto,
                    producto.url 
                FROM orden 
                JOIN partida
                    ON orden.id_orden=partida.id_orden
                JOIN producto 
                    ON partida.id_producto=producto.id_producto
                WHERE orden.id_orden = ${ req.params.id };  
            `;

            const conn = await getConnection();
            const result = await conn.query( query );

            res.json( result );

        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener la info genetal con orden: ' + error
            })
        }
    }
};