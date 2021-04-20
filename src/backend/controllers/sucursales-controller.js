/**
 * Aqui estan las operaciones crud de la tabla producto
 * TODO: Validar los tipos de datos al momento de interactuar con la bd
 */

 const { getConnection } = require('../database');
 
 module.exports = {
 
    createSucursal: async ( req, res ) => {        
        try {

            console.log( req.body )

            const query = `
                INSERT INTO sucursal
                    (
                        nombre_sucursal, 
                        nombre_encargado,
                        direccion_sucursal,
                        celular_sucuarsal,
                        id_equipo
                    )
                VALUES
                    (
                        "${ req.body.nombre_sucursal }",
                        "${ req.body.nombre_encargado }",
                        "${ req.body.direccion_sucursal }",
                        "${ req.body.celular_sucursal }",
                        ${ req.body.id_equipo }
                    );
            `;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al crear una sucursal: ' + error
            });
        }
    },

    getSucursales: async ( req, res ) => {
        try {
            const query = `SELECT * FROM sucursal`;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener las sucursales: ' + error
            });
        }
    },

    getInfoSucursal: async ( req, res ) => {
        try {
            const query = `SELECT * FROM sucursal WHERE id_sucursal = ${ req.params.id }`;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener al obtener la sucursal: ' + error
            });
        }
    },

    updateSucursal: async ( req, res ) => {
        try {

            const query = `
            UPDATE sucursal SET 
                nombre_sucursal = "${ req.body.nombre_sucursal }",
                nombre_encargado = "${ req.body.nombre_encargado }",
                direccion_sucursal = "${ req.body.direccion_sucursal }",
                celular_sucuarsal = ${ req.body.celular_sucursal },
                id_equipo = "${ req.body.id_equipo }"
            WHERE id_sucursal = ${ req.params.id };
            `;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al actualizar la sucursal: ' + error
            });
        }
    },

    borrarSucursal: async ( req, res ) => {
        try {
            const query = `DELETE FROM sucursal WHERE id_sucursal = ${ req.params.id }`;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al eliminar una sucursal: ' + error
            });
        }
    }
 };