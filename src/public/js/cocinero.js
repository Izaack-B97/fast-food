const { getToServer } = require('./js/helpers/llamadas');
const { ipcRenderer } = require('electron');
const moment = require('moment');

const infoOrden = document.querySelector('#info-orden'); // Area donde se dibujara la info de la orden


// Este metodo me dibujara toda 
// la información de la orden
const dibujarInfo = ( orden ) => {

    getToServer(`ordenes/info-general/${ orden[0].id_orden }`)
        .then(data => {    

            // console.log( data );
            let tpl_productos = '';
            data.forEach(o => {
                tpl_productos += `
                    <li class="my-1 animate__animated animate__bounceInLeft">
                        <img src="${ o.url }" alt="${ o.nombre_producto } class=""/>
                        <p class="text-white">
                            &nbsp; 
                            ${ o.nombre_producto }
                            , cantidad: ${ o.cantidad }
                        </p>
                    </li>
                `;
            })

            // console.log( tpl_productos );

            infoOrden.innerHTML = '';
            infoOrden.innerHTML += `
                <li>
                    <p class="text-white h4 pull-left">
                        Descripci&oacute;n: 
                        <i>${orden[0].especificacion_orden}</i>
                    </p>
                </li>
                ${ tpl_productos }
            
            `;
            

        })
        .catch( err => {
            console.log( err );
        });
};

(() => {
    console.log('--- cocinero.js ---');
    let id_orden = 0;
    getToServer('ordenes')
        .then(ordenes => {
            console.log( ordenes );

            const tableOrdenes = document.querySelector('#table-ordenes');
            const tbody = tableOrdenes.querySelector('tbody');
            const checkOrdenLista = document.querySelector('#checkOrdenLista');

            ordenes.sort().reverse();
            ordenes.forEach(orden => {
                tbody.innerHTML += `
                    <tr>
                        <td>${ orden.id_orden }</td>
                        <td>${ moment( orden.created_at ).format(`DD-MM, hh:mm`) }</td>
                    </tr>
                `
            });

            const rows = tbody.querySelectorAll('tr');
            rows.forEach(row => {
                row.addEventListener('click', () => {
                    
                    const id = parseInt( row.querySelector('td').textContent ); 
                    const divOrden = document.querySelector('#numero-orden');
                    const divHora = document.querySelector('#hora-orden');
                    id_orden = id;

                    getToServer(`ordenes/${ id }`)
                        .then(data => {
                            const infoOrden = data[0];
                            dibujarInfo(data);
                            divOrden.textContent = `#${ id }`;
                            divHora.textContent = moment(infoOrden.created_at).format('hh:mm');
                            checkOrdenLista.removeAttribute('disabled');
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
                        // console.log( orden );
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
                                    dibujarInfo( data );
                                    const divOrden = document.querySelector('#numero-orden');
                                    const divHora = document.querySelector('#hora-orden');
                                    divOrden.textContent = `#${ id }`;
                                    divHora.textContent = moment(data.created_at).format('hh:mm');
                                    checkOrdenLista.removeAttribute('disabled');

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
            
            const btnSiguiente =  document.querySelector('#btnSiguiente');
            btnSiguiente.addEventListener('click', () => {
                const areaAccionesOrdenen = document.querySelector('#acciones-orden');                
                ipcRenderer.send('orden-lista', id_orden);
                
                areaAccionesOrdenen.innerHTML += `
                    <div id="notificacionOrdenLista" class="alert alert-success text-center mt-3 animate__animated animate__bounceInRight notificacion_orden" role="alert">
                        La orden ${ id_orden } fue notificada al cajero satisfactoriamente
                    </div>
                `;

                infoOrden.innerHTML = '';
                infoOrden.innerHTML += `
                    <li class="animate__animated animate__bounceInRight">
                        <p class="lead">Siguiente orden porfavor !</p>
                    </li>
                `;
                checkOrdenLista.checked = false;
                checkOrdenLista.setAttribute('disabled', false);
                btnSiguiente.setAttribute('disabled', false);

                setTimeout(() => {
                    areaAccionesOrdenen.innerHTML = '';
                }, 2500);

            });
            
            checkOrdenLista.addEventListener('click', (e) => {
                if ( checkOrdenLista.checked ) btnSiguiente.removeAttribute('disabled');
                else btnSiguiente.setAttribute('disabled', true);
            });

            // Captamos los mensajes del cajero
            const taMessages = document.querySelector('#taMessages');
            const btnMandarMensaje = document.querySelector('#btnMandarMensaje');
            const inputMessage = document.querySelector('#inputMessages');
            ipcRenderer.on('chat-cocinero', ( event, data ) => {
                taMessages.value += `Cajero: ${ data.message }. ${ data.hora } \n`;
                const div = document.querySelector('#acciones-orden');
                div.innerHTML = `
                <div class="alert alert-primary alert-dismissible fade show mt-3 animate__animated animate__bounceInRight notificacion_orden" role="alert">
                    El cocinero dice: ${ data.message } ${ data.hora }
                </div>
                `
                setTimeout(() => {
                    div.innerHTML = '';
                }, 2000);

            });

            btnMandarMensaje.addEventListener('click', () => {
                const hoy = new Date();
                if (inputMessage.value.lenght !== 0) {
                    taMessages.value += `Yo: ${ inputMessage.value }. ${ moment( hoy ).format('hh:mm a') } \n`;
                    ipcRenderer.send('chat-cajero', { message: inputMessage.value, hora: moment( hoy ).format('hh:mm a') });
                    inputMessage.value = '';
                }
            })
        })
        .catch(err => {
            console.log( err );
        })

        // Detectamos que se cerro la ventana principal
        ipcRenderer.on('cerrando-app', ( event, data ) => {
            console.log( data )
            const { remote, app } = require('electron');
            const currentWindow = remote.getCurrentWindow();
            const main = remote.require('./index.js');
            currentWindow.close();
            app.quit();
        })
})();