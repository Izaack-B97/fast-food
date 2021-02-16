const { getToServer } = require('./js/helpers/llamadas');
const { ipcRenderer } = require('electron');
const moment = require('moment');


(() => {
    console.log('--- cocinero.js ---');

    getToServer('ordenes')
        .then(ordenes => {
            console.log( ordenes );

            const tableOrdenes = document.querySelector('#table-ordenes');
            const tbody = tableOrdenes.querySelector('tbody');

            ordenes.sort().reverse();
            ordenes.forEach(orden => {
                tbody.innerHTML += `
                    <tr>
                        <td>${ orden.id_orden }</td>
                        <td>${ moment( orden.created_at ).format(`DD-MM, hh:mm`) }</td>
                    </tr>
                `
            });

            const btnSiguiente =  document.querySelector('#btnSiguiente');
            btnSiguiente.addEventListener('click', () => {
                // ipcRenderer.send('event:hola', 'hola');
                console.log('click en siguiente');
            });

            const rows = tbody.querySelectorAll('tr');
            rows.forEach(row => {
                row.addEventListener('click', () => {
                    const id = parseInt( row.querySelector('td').textContent );
                    getToServer(`ordenes/${ id }`)
                        .then(data => {
                            console.log( data );
                            btnSiguiente.removeAttribute('disabled')
                        })
                        .catch(err => {
                            console.log( err );
                        });
                }) ;
            }); 

            ipcRenderer.on('orden-levantada', ( event, data ) => {
                const now = new Date();
                console.log( data );
                tbody.innerHTML += `
                    <tr class="bg-warning animate__animated animate__fadeInLeftBig">
                        <td>${ data.id }</td>
                        <td>${ data.especificacion_orden }</td>
                    </tr>
                `;               
            })
        })
        .catch(err => {
            console.log( err );
        })
})();