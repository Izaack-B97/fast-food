/**
 * Aqui estan las operaciones crud de la tabla producto
 * TODO: Validar los tipos de datos al momento de interactuar con la bd
 */

 const { getConnection } = require('../database');
 
 module.exports = {
 
    createEmpleado: async ( req, res ) => {   
        try {
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
                        id_sucursal,
                        edad,
                        url
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
                        ${ req.body.id_sucursal },
                        ${ parseInt(req.body.edad) },
                        "${ req.body.url }"
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
            
            throw error;
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
        
        console.log( req.body );

        try {
            const query = `
                UPDATE EMPLEADO SET 
                    nombre_empleado = "${ req.body.nombre_empleado }",
                    celular = "${ req.body.celular }",
                    sexo = "${ req.body.sexo }",
                    edad = ${ req.body.edad },
                    puesto = "${ req.body.puesto }",
                    entrada = "${ req.body.entrada }",
                    salida = "${ req.body.salida }",
                    correo = "${ req.body.correo }",
                    url = "${ req.body.url }",
                    id_sucursal = ${ req.body.id_sucursal },
                    id_equipo = ${ req.body.id_equipo }
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