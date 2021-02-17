const { getToServer } = require('./js/helpers/llamadas');
const { ipcRenderer } = require('electron');
const moment = require('moment');

// Este metodo me dibujara toda 
// la infor de la orden
const dibujarInfo = ( orden ) => {
    const infoOrden = document.querySelector('#info-orden');

    infoOrden.innerHTML = '';
    infoOrden.innerHTML += `
        <li>
            <p class="text-white h2 pull-left">
                Descripci&oacute;n: 
                <i>${orden[0].especificacion_orden}</i>
            </p>
        </li>
    `;

};

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
                            // console.log( data );
                            btnSiguiente.removeAttribute('disabled');
                            dibujarInfo(data);
                        })
                        .catch(err => {
                            console.log( err );
                        });
                }) ;
            }); 

            // Aqui esta cachando la orden levantanda
            ipcRenderer.on('orden-levantada', ( event, data ) => {
                console.log(data.id);
                getToServer(`ordenes/${ data.id }`)
                    .then(orden => {
                        console.log( orden );
                        // Creamos los nodos
                        const tr = document.createElement('tr');
                        const td_orden = document.createElement('td');
                        const td_hora = document.createElement('td');
                        const td_orden_text = document.createTextNode(orden[0].id_orden);
                        const td_hora_text = document.createTextNode(moment( orden[0].created_at ).format(`DD-MM, hh:mm`));

                        // Dibujamos los nodos
                        td_orden.appendChild(td_orden_text);
                        td_hora.appendChild(td_hora_text);
                        tr.appendChild( td_orden );
                        tr.appendChild( td_hora )

                        // Agregamos una animacion a la nueva orden
                        tr.classList.add('animate__animated');
                        tr.classList.add('animate__bounceInRight');
                        tr.classList.add('bg-secondary');

                        // Agregamos el evento que tienen todos los rows
                        tr.addEventListener('click', () => {
                            const id = parseInt( tr.querySelector('td').textContent );
                            getToServer(`ordenes/${ id }`)
                                .then(data => {
                                    // console.log( data );
                                    btnSiguiente.removeAttribute('disabled');
                                    dibujarInfo( data );

                                })
                                .catch(err => {
                                    console.log( err );
                                });

                                // Removemos la clase
                                tr.classList.remove('bg-secondary');
                        }) ;

                        // Insertamos la primer orden
                        const firstRow = tbody.childNodes.item(3);
                        tbody.insertBefore( tr, firstRow );

                    });
            });
        })
        .catch(err => {
            console.log( err );
        })
})();