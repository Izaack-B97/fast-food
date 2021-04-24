const moment = require('moment');
const render_grafico = require('./js/helpers/graficas');
const { getToServer } = require('./js/helpers/llamadas');
const $ = require('jquery');

(function() {
    console.log('--- graficos.js ---');

    getToServer('ordenes')
        .then(ordenes => {
            console.log( ordenes )

            const mapFechas = ordenes.map(orden => moment( orden.create_at ).format('DD-MM-YYYY') );
            const mapGanancias = ordenes.map(orden =>  orden.total_pagar );
            const gananciasTotales = mapGanancias.reduce((anterior, actual) => anterior + actual );
            const divGrafica = document.querySelector('#myChart');
            render_grafico( divGrafica, 'pie', [ 'Ingresos' ],  [ gananciasTotales, 100 ]);
        
            // Estadisticas de los dogos
            getToServer('reportes/dogos')
                .then(data => {
                    const cantidad = data[0].cantidad || 0;
                    const divGraficaDogos = document.querySelector('#myChartDogos');
                    const totalDogo = document.querySelector('#totalDogos').textContent = cantidad;
                    render_grafico( divGraficaDogos, 'doughnut', ['Dogos'],  [ cantidad, 10 ]);
                })
                .catch(err => {
                    console.log( err );
                });

            // Estadisticas de las hamburguesas
            getToServer('reportes/hamburguesas')
                .then(data => {
                    const cantidad = data[0].cantidad || 0;
                    const totalHamburguesas = document.querySelector('#totalHamburguesas').textContent = cantidad;
                    const divGraficaHamburguesas = document.querySelector('#myChartHamburguesas');
                    render_grafico( divGraficaHamburguesas, 'doughnut', ['Hamburguesas'],  [ cantidad, 10 ]);
                })
                .catch(err => {
                    console.log( err )
                });

            
            // Estadisticas de las especialidades
            getToServer('reportes/especialidades')
                .then(data => {
                    console.log( data )
                    const cantidad = data[0].cantidad || 0;
                    const divGraficaEspecialidades = document.querySelector('#myChartEspecialidades');
                    const totalEspecialidades = document.querySelector('#totalEspecialidades').textContent = cantidad;
                    render_grafico( divGraficaEspecialidades, 'doughnut', ['Especialidades'],  [ cantidad, 10 ]);
                })
                .catch(err => {
                    console.log( err )
                });
            
            // Estadisticas de los perches
            getToServer('reportes/percherones')
                .then(data => {
                    const cantidad = data[0].cantidad || 0;
                    const divGraficaEspecialidades = document.querySelector('#myChartPercherones');
                    const totalPerches = document.querySelector('#totalPercherones').textContent = cantidad;    
                    render_grafico( divGraficaEspecialidades, 'doughnut', ['Percherones'],  [ cantidad , 10 ]);
                })
                .catch(err => {
                    console.log( err )
                });


        })
        .catch(err => {
            console.log(err);
        })

    // getToServer('reportes/dogos')
    //     .then(data => {
    //         const cantidad = data[0].cantidad;
    //         const divGraficaDogos = document.querySelector('#myChartDogos')
    //         const divGraficaBebidas = document.querySelector('#myChartBebidas')
    //         const divGraficaMomias = document.querySelector('#myChartEspecialidades')
    //         const divGraficaHamburguesas = document.querySelector('#myChartHamburguesas')

    //         render_grafico( divGraficaDogos, 'doughnut', '',  [ cantidad, 10 ]);
    //         render_grafico( divGraficaBebidas, 'doughnut', '',  [ 1200, 100 ]);
    //         render_grafico( divGraficaMomias, 'doughnut', '',  [ 1200, 100 ]);
    //         render_grafico( divGraficaHamburguesas, 'doughnut', '',  [ 1200, 100 ]);
            
    //     })
    //     .catch(err => {
    //         console.log( err );
    //     });

    $( '#selectSucursales' ).change(( e ) => {
        console.log( e.target.value );
    });

})();