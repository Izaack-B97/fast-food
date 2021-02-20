const moment = require('moment');
const render_grafico = require('./js/helpers/graficas');
const { getToServer } = require('./js/helpers/llamadas');

(function() {
    console.log('--- graficos.js ---');

    getToServer('ordenes')
        .then(ordenes => {
            
            const mapFechas = ordenes.map(orden => moment( orden.create_at ).format('DD-MM-YYYY') ); 
            const mapGanancias = ordenes.map(orden =>  orden.total_pagar );

            console.log( mapFechas );
            console.log(  mapGanancias );

            const valorTotal = mapGanancias.reduce((anterior, actual) => anterior + actual );
            
            const columnas = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
            const data = [12, 19, 3, 5, 2, 3];

            const divGrafica = document.querySelector('#myChart');
            render_grafico( divGrafica, 'doughnut', columnas,  data);
        
        })
        .catch(err => {
            console.log(err);
        })


})();