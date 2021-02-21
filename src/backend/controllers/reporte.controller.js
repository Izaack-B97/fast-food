const { json } = require("body-parser");

const { getConnection } = require('../database');

module.exports = {  

    getReporteHamburguesas: async ( req, res ) => {
        try {
            
            const query = `
                SELECT 
                    SUM(cantidad) as cantidad, 
                    producto.id_tc 
                FROM partida 
                JOIN producto 
                    ON 
                    partida.id_producto=producto.id_producto 
                WHERE producto.id_tc=1 
                AND MONTH(partida.created_at)=2;
            `;

            const conn = await getConnection();
            let result = await conn.query( query );
            if ( result.length !== 0) {
                res.json( result );
            } else {
                res.json({
                    message: 'No hay reporte sobre las hamburguesas aún'
                });
            }
            
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener el reporte de las hamburguesas: ' + error
            });
        }
    },

    getReporteDogos: async ( req, res ) => {
        try {
            
            const query = `
                SELECT 
                    SUM(cantidad) as cantidad, 
                    producto.id_tc 
                FROM partida 
                JOIN producto 
                ON partida.id_producto=producto.id_producto 
                WHERE producto.id_tc=2 
                AND MONTH(partida.created_at)=2;
            `;

            const conn = await getConnection();
            let result = await conn.query( query );
            if ( result.length !== 0) {
                res.json( result );
            } else {
                res.json({
                    message: 'No hay reporte sobre las dogos aún'
                });
            }
            
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener el reporte de las dogos: ' + error
            });
        }
    },

    getReporteEspecialidades: async ( req, res ) => {
        try {
            
            const query = `
                SELECT 
                    SUM(cantidad) as cantidad, 
                    producto.id_tc 
                FROM partida 
                JOIN producto 
                ON partida.id_producto=producto.id_producto 
                WHERE producto.id_tc=4 
                AND MONTH(partida.created_at)=2;
            `;

            const conn = await getConnection();
            let result = await conn.query( query );
            if ( result.length !== 0) {
                res.json( result );
            } else {
                res.json({
                    message: 'No hay reporte sobre las especialidades aún'
                });
            }
            
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener el reporte de las especialidades: ' + error
            });
        }
    },

    
    getReportePerches: async ( req, res ) => {
        try {

            const query = `
                SELECT 
                    SUM(cantidad) as cantidad, 
                    producto.id_tc 
                FROM partida 
                JOIN producto 
                ON partida.id_producto=producto.id_producto 
                WHERE producto.id_tc=5 
                AND MONTH(partida.created_at)=2;
            `;

            const conn = await getConnection();
            let result = await conn.query( query );
            if ( result.length !== 0) {
                res.json( result );
            } else {
                res.json({
                    message: 'No hay reporte sobre los percherones aún'
                });
            }
            
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener el reporte de las especialidades: ' + error
            });
        }
    }

};