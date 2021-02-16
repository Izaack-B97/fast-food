const { getToServer } = require('./js/helpers/llamadas');
const { ipcRenderer } = require('electron');
const moment = require('moment');


(() => {
    console.log('--- cocinero.js ---');

    getToServer('ordenes')
        .then(ordenes => {
            console.log( ordenes );

            const tableOrdenes = document.querySelector('#table-ordenes');
            ordenes.sort().reverse();
            ordenes.forEach(orden => {
                const tbody = tableOrdenes.querySelector('tbody');
                tbody.innerHTML += `
                    <tr>
                        <td>${ orden.id_orden }</td>
                        <td>${ moment( orden.created_at ).format(`DD-MM, hh:mm`) }</td>
                    </tr>
                `
            });

            const btnSiguiente =  document.querySelector('#btnSiguiente');
            btnSiguiente.addEventListener('click', () => {
                ipcRenderer.send('event:hola', 'hola');
            });

        })
        .catch(err => {
            console.log( err );
        })
})();