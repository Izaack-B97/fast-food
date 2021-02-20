const render_grafico = require('./js/helpers/graficas');
const { getToServer } = require('./js/helpers/llamadas');

(function() {
    console.log('--- graficos.js ---');

    getToServer('partidas')
        .then(resp => {
            console.log(resp);
            
            const columnas = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
            const data = [12, 19, 3, 5, 2, 3];
            const divGrafica = document.querySelector('#myChart');
            render_grafico( divGrafica, 'bar', columnas, data );
        
        })
        .catch(err => {
            console.log(err);
        })


})();