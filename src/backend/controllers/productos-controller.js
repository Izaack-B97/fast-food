/**
 * Aqui estan las operaciones crud de la tabla producto
 * TODO: Validar los tipos de datos al momento de interactuar con la bd
 */


const { getConnection } = require('../database');

module.exports = {

    createProduct: async ( req, res ) => {        
        try {

            const query = `
                INSERT INTO producto 
                    (nombre_producto, 
                    precio_producto, 
                    tipo_producto)
                VALUES
                    ("${ req.body.nombre_producto }", 
                    ${ req.body.precio_producto }, 
                    "${ req.body.tipo_producto }");
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

    getProduct: async ( req, res ) => {
        try {

            const conn = await getConnection();
            const result  = await conn.query(`SELECT * FROM producto WHERE id_producto = ${ req.params.id }`);            
            
            if ( result.length === 0 ) {
                res.json({
                    status: 'failed',
                    message: 'El producto no existe'
                });
            } else {
                res.json( result );
            }
        
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener el producto: ' + error
            });
        }
    },

    getProducts: async ( req, res ) => {
        try {
            
            const conn = await getConnection();
            const result = await conn.query(`SELECT * FROM producto`);
            res.json( result );

        } catch (error) {
            res.json({
                status: 'Failed',
                message: 'Error al obtener los productos: ' + error
            });
        }
    },

    updateProduct: async ( req, res ) => {
        try {
            const query = `
                UPDATE producto SET 
                nombre_producto = "${ req.body.nombre_producto }",
                precio_producto = ${ req.body.precio_producto },
                tipo_producto   = "${ req.body.tipo_producto }"
                WHERE id_producto = ${ req.params.id };
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

    deleteProduct: async ( req, res ) => {
        try {
            const conn = await getConnection();
            const result = await conn.query(`DELETE FROM producto WHERE id_producto = ${ req.params.id };`);
            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al eliminar producto: ' + error
            });
        }
    }
};