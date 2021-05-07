/**
 * Aqui estan las operaciones crud de la tabla producto
 * TODO: Validar los tipos de datos al momento de interactuar con la bd
 */

 const { getConnection } = require('../database');
 
 module.exports = {
 
    createEmpleado: async ( req, res ) => {   
        try {

            console.log( req.body );

            const query = `
                INSERT INTO empleado 
                    (
                        nombre_empleado, 
                        celular,
                        sexo,
                        puesto,
                        id_equipo,
                        entrada,
                        salida,
                        correo,
                        id_sucursal
                    )
                VALUES
                    (
                        "${ req.body.nombre_empleado }",
                        "${ req.body.celular }",
                        "${ req.body.sexo }",
                        "${ req.body.puesto }",
                        ${ req.body.id_equipo },
                        "${ req.body.hora_entrada }",
                        "${ req.body.hora_salida }",
                        "${ req.body.correo }",
                        ${ req.body.id_sucursal }
                    );
            `;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al crear un empleado: ' + error
            });
        }
    },

    getEmpleados: async ( req, res ) => {
        
        try {
            const query = `SELECT * FROM empleado`;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener los empleados: ' + error
            });
        }

    },

    getInfoEmpleado:async  ( req, res ) => {
        try {
            const query = `SELECT * FROM empleado WHERE id_empleado=${ req.params.id }`;

            const conn = await getConnection();
            const result =  await conn.query( query );
            console.log(result)
            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener el empleado: ' + error
            });
        }
    },

    updateEmpleado: async ( req, res ) => {
        try {
            const query = `
                UPDATE EMPLEADO SET 
                    nombre_empleado = "${ req.body.nombre_empleado }",
                    celular = "${ req.body.celular }",
                    sexo = "${ req.body.sexo }",
                    puesto = "${ req.body.puesto }"
                    url = "${ req.body.url }"
                WHERE id_empleado = ${ req.params.id };
            `;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al actualizar un empleado: ' + error
            });
        }
    },

    borrarEmpleado: async ( req, res ) => {
        try {
            const query = `DELETE FROM empleado WHERE id_empleado = ${ req.params.id }`;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al eliminar un empleado: ' + error
            });
        }
    }
    
};