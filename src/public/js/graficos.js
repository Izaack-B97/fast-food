const moment = require('moment');
const render_grafico = require('./js/helpers/graficas');
const { getToServer } = require('./js/helpers/llamadas');

(function() {
    console.log('--- graficos.js ---');

    getToServer('ordenes')
        .then(ordenes => {
            console.log( ordenes )

            const mapFechas = ordenes.map(orden => moment( orden.create_at ).format('DD-MM-YYYY') );
            const mapGanancias = ordenes.map(orden =>  orden.total_pagar );

            // console.log( mapFechas );
            // console.log(  mapGanancias );

            const gananciasTotales = mapGanancias.reduce((anterior, actual) => anterior + actual );
            
            // const columnas = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
            // const data = [12, 19, 3, 5, 2, 3];

            const divGrafica = document.querySelector('#myChart');
            render_grafico( divGrafica, 'pie', [ 'Ingresos', 'Impuestos' ],  [ gananciasTotales, 100 ]);
        
        })
        .catch(err => {
            console.log(err);
        })

    getToServer('ordenes/informacion/general/todas')
        .then(data => {
            const divGraficaDogos = document.querySelector('#myChartDogos')
            const divGraficaBebidas = document.querySelector('#myChartBebidas')
            const divGraficaMomias = document.querySelector('#myChartMomias')
            const divGraficaHamburguesas = document.querySelector('#myChartHamburguesas')

            render_grafico( divGraficaDogos, 'doughnut', '',  [ 1200, 100 ]);
            render_grafico( divGraficaBebidas, 'doughnut', '',  [ 1200, 100 ]);
            render_grafico( divGraficaMomias, 'doughnut', '',  [ 1200, 100 ]);
            render_grafico( divGraficaHamburguesas, 'doughnut', '',  [ 1200, 100 ]);
            
        })
        .catch(err => {
            console.log( err );
        });

})();