/**
 * Aqui estan las operaciones crud de la tabla ordenes
 * TODO: Validar los datos que interactuan con la bd
 */

const { getConnection } =  require('../database');
console.log( 'Aqui' )
module.exports = {

    getEquipos: async ( req, res ) => {
        try {
            console.log( 'eyeye' )
            const query = `SELECT * FROM equipo`;

            const conn = await getConnection();
            const result =  await conn.query( query );

            res.json( result );
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener equipos: ' + error
            });
        }
    }
};