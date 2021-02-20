/**
 * Logica de las acciones CRUD que interactuaran con las partidas en la bd
 * TODO: Hacer las validaciones que faltan para los tipos de datos que se mandan
 */

const { query } = require('express');
const { getConnection } = require('../database');

module.exports = {

    createPartida: async ( req, res ) => {
        try {
            const query = `
                INSERT INTO partida
                (   
                    id_producto, 
                    cantidad, 
                    importe, 
                    id_orden
                )
                VALUES
                (
                    ${ req.body.id_producto },
                    ${ req.body.cantidad },
                    ${ req.body.importe },
                    ${ req.body.id_orden }
                );
            `;
           
            const conn = await getConnection();
            const result = await conn.query( query );

            res.json( result );

        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al crear partida: ' + error
            })
        }
    },

    getPartida: async ( req, res ) => {
        try {
            const conn = await getConnection();
            const result = await conn.query(`SELECT * FROM partida WHERE id_partida = ${ req.params.id }`);
            
            if ( result.length === 0 ) {
                res.json({
                    status: 'failed',
                    message: 'La partida no existe'
                });
            } else {
                res.json( result );
            }

        } catch( error ) {
            res.json({
                status: 'failed',
                message: 'Error al obtener la partida: ' + error
            })
        }
    },

    getPartidas: async ( req, res ) => {
        try {
            const conn = await getConnection();
            const result = await conn.query('SELECT * FROM partida');

            res.json( result );
            
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener las partidas: ' + error
            })
        }
    },

    updatePartida: async ( req, res ) => {
        try {

            const query = `
            UPDATE partida SET 
                id_producto = ${ req.body.id_producto },
                cantidad = ${ req.body.cantidad },
                importe = ${ req.body.importe },
                id_orden = ${ req.body.id_orden }                
            WHERE id_partida = ${ req.params.id };
            `;

            const conn = await getConnection();
            const result = await conn.query( query );

            

            res.json( result );

        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al actualizar partida: ' + error
            });   
        }
    },

    deletePartida: async ( req, res ) => {
        try {
            const conn = await getConnection();
            const result = await conn.query(`DELETE FROM partida WHERE id_partida = ${ req.params.id };`);
            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al eliminar partida: ' + error
            });
        }
    },

    getPartidasByOrden: async ( req, res ) => {

        try {
            const query = `
                SELECT 
                    partida.id_partida,
                    orden.id_orden, 
                    orden.especificacion_orden,
                    orden.total_pagar,
                    producto.nombre_producto
                FROM partida 
                INNER JOIN orden 
                ON 
                    orden.id_orden = ${ req.params.id }
                INNER JOIN producto;                
            `;

            const conn = await getConnection();
            const result = await conn.query( query );

            res.json( result );

        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener la partida con orden: ' + error
            })
        }
    }
};