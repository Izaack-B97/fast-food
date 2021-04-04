const { getToServer, postToServer } = require('./js/helpers/llamadas'); // Tiene que ser relativo al html
const { remote, ipcRenderer } = require('electron');
const spaceVenta = document.querySelector('#space-venta');
const moment = require('moment');

(() => {
    console.log('--- ordenes.js ---');

    getToServer('productos')
        .then( productos => {
            // console.log(productos);
            let orden = [];

            const divOrden = document.querySelector('#orden');
            const divHora = document.querySelector('#hora-orden');
            divHora.textContent = moment(Date.now()).format('hh:mm a');

            // Mostramos la hora cuando cambie cada 60s
            setInterval(() => {
                divHora.textContent = moment(Date.now()).format('hh:mm a');
            }, 60000);

            getToServer('ordenes')
                .then(ordenes => {
                    console.log( ordenes );
                    divOrden.textContent = ordenes[ordenes.length - 1].id_orden + 1;
                })
                .catch(err => {
                    console.log( err );
                })

            const tabla_productos = document.querySelector('#table-productos');
            const tbody = tabla_productos.childNodes.item(3);
            
            // Ordenamos los productos  
            productos.sort((a, b) => {
                if (a.id_tc > b.id_tc) return 1;
                if (a.id_tc < b.id_tc) return -1;
                return 0; // Son iguales
            });

            const tdComida = tbody.childNodes.item(1).childNodes.item(1);
            const tdBebida = tbody.childNodes.item(1).childNodes.item(3);
            const tdPostre = tbody.childNodes.item(1).childNodes.item(5);

            const handleVenta = () => {
                console.log( 'hola' );
            }

            // Dibujamos los productos dinamicamente
            productos.forEach(producto => {

                if ( producto.id_tc === 1 ) {
                    tdComida.innerHTML += `
                        <div class="card bg-vino mt-1" style="cursor: pointer">
                            <input type="hidden" value="${ producto.id_producto }">
                            <img src="${ producto.url }" class="mx-auto" alt="ejemplo">
                            <small>${ producto.nombre_producto } $<span>${ producto.precio_producto }</span></small>
                        </div>
                    `;
                }

                if ( producto.id_tc === 2 ) {
                    tdBebida.innerHTML += `
                        <div class="card bg-vino mt-1" style="cursor: pointer">
                            <input type="hidden" value="${ producto.id_producto }">
                            <img src="${ producto.url }" class="mx-auto" alt="ejemplo">
                            <small>${ producto.nombre_producto } $<span>${ producto.precio_producto }</span></small>
                        </div>
                    `;
                }

                if ( producto.id_tc === 3 ) {
                    tdPostre.innerHTML += `
                        <div class="card bg-vino mt-1" style="cursor: pointer">
                            <input type="hidden" value="${ producto.id_producto }">
                            <img src="${ producto.url }" class="mx-auto" alt="ejemplo">
                            <small>${ producto.nombre_producto } $<span>${ producto.precio_producto }</span></small>
                        </div>
                    `;
                }
            });

            let totalPagar = 0;
            const arrayDivProductos = document.querySelectorAll('div.card');
            const btnVenta = document.querySelector('#btnVenta');
            const listaOrdenes = document.querySelector('#lista-ordenes');

            arrayDivProductos.forEach(divProducto => {
                divProducto.addEventListener('click', function(e) {
                    const idProducto = parseInt(this.childNodes.item(1).value);
                    const urlProducto = this.querySelector('img').src;
                    const detallesProducto = this.childNodes.item(5).textContent;
                    const price = this.childNodes.item(5).querySelector('span').textContent;
                    const divTotal = document.querySelector('#total');

                    listaOrdenes.innerHTML += `
                        <li class="mt-1 animate__animated animate__bounceIn">
                            <input type="hidden" value="${ idProducto }" class="idProducto">
                            <input type="hidden" value="${ price }" class="price">
                            <img src="${ urlProducto }" class="float-start" alt="ejemplo">
                            <p>${ detallesProducto }</p>
                            <div class="clearfix"></div>
                        </li>
                    `;

                    const precioProducto = parseFloat( this.childNodes.item(5).lastChild.textContent );
                    totalPagar += precioProducto;
                    divTotal.textContent = totalPagar;                    
                    
                    btnVenta.removeAttribute('disabled');
                    btnCancelarVenta.removeAttribute('disabled');
                });
            });

            btnVenta.addEventListener('click', () => {

                spaceVenta.innerHTML = `
                    <form class=" animate__animated animate__bounceInDown">
                        <div class="form-group">
                            <textarea id="descripcion" name="descripcion" class="form-control" rows="10" placeholder="Descripción de la orden" autofocus></textarea>
                        </div>
                        <div class="form-group mt-2">
                            <h5 class="pull-left">Pagar</h5>
                            <div class="clearfix"></div>
                        </div>
                        <div class="btn-group btn-block" role="group" aria-label="Basic example">
                            <button id="btnEfectivo" type="button" class="btn btn-success py-3">EFECTIVO</button>
                            <button id="btnTarjeta" type="button" class="btn btn-success py-3">TARJETA</button>
                            <button id="btnMixto" type="button" class="btn btn-success py-3">MIXTO</button>
                        </div>
                        <div id="tipoPago" class="form-group my-2"></div>
                        <hr />
                        <div class="form-group mt-2">
                            <a id="btnCerrarOrden" class="btn btn-success btn-block py-3">Guardar orden</a>
                        </div>
                        <div class="form-group mt-1">
                            <a id="btnCancelarOrden" class="btn btn-danger btn-block py-3">Cancelar orden</a>
                        </div>
                    </form>
                `;

                const btnGuardarOrden = document.querySelector('#btnCerrarOrden');
                const btnCancelarOrden = document.querySelector('#btnCancelarOrden');
                const btnEfectivo =  document.querySelector('#btnEfectivo');
                const btnTarjeta =  document.querySelector('#btnTarjeta');
                const btnMixto =  document.querySelector('#btnMixto');
                const tipoPago = spaceVenta.querySelector('#tipoPago')
                // const btnCancelarVenta = document.querySelector('#btnCancelarVenta');

                btnEfectivo.addEventListener('click', () => {
                    
                    for (let i = 0; i < btnTarjeta.classList.length; i++) {
                        if ( btnTarjeta.classList[i] === 'btn-primary' ) {
                            btnTarjeta.classList.remove('btn-primary')
                            btnTarjeta.classList.add('btn-success');
                        }
                    }

                    for (let i = 0; i < btnMixto.classList.length; i++) {
                        if ( btnMixto.classList[i] === 'btn-primary' ) {
                            btnMixto.classList.remove('btn-primary')
                            btnMixto.classList.add('btn-success');MixbtnMixto
                        }
                    }

                    btnEfectivo.classList.remove('btn-success');
                    btnEfectivo.classList.add('btn-primary')

                    tipoPago.innerHTML = '';

                });
                
                btnTarjeta.addEventListener('click', () => {

                    for (let i = 0; i < btnEfectivo.classList.length; i++) {
                        if ( btnEfectivo.classList[i] === 'btn-primary' ) {
                            btnEfectivo.classList.remove('btn-primary')
                            btnEfectivo.classList.add('btn-success');
                        }
                    }

                    for (let i = 0; i < btnMixto.classList.length; i++) {
                        if ( btnMixto.classList[i] === 'btn-primary' ) {
                            btnMixto.classList.remove('btn-primary')
                            btnMixto.classList.add('btn-success');
                        }
                    }

                    tipoPago.innerHTML = `
                        <label for="no_tarjeta "> No. Tarjeta </label>
                        <input id="noTarjeta" name="no_tarjeta" class="form-control" placeholder="0000-0000-0000-0000"/>
                    `;

                    btnTarjeta.classList.remove('btn-success');
                    btnTarjeta.classList.add('btn-primary')
                })

                btnMixto.addEventListener('click', () => {

                    for (let i = 0; i < btnEfectivo.classList.length; i++) {
                        if ( btnEfectivo.classList[i] === 'btn-primary' ) {
                            btnEfectivo.classList.remove('btn-primary')
                            btnEfectivo.classList.add('btn-success');
                        }
                    }

                    for (let i = 0; i < btnTarjeta.classList.length; i++) {
                        if ( btnTarjeta.classList[i] === 'btn-primary' ) {
                            btnTarjeta.classList.remove('btn-primary')
                            btnTarjeta.classList.add('btn-success');
                        }
                    }

                    tipoPago.innerHTML = `
                        <div>
                            <label for="cantidad_efectivo my-2"> Cantidad en efectivo </label>
                            <input id="cantidadEfectivo" name="cantidad_efectivo" class="form-control" placeholder="$ 00.00"/>
                        </div>
                        <div class="bg-secondary p-2">
                            <div>
                                <label for="no_tarjeta "> No. Tarjeta </label>
                                <input id="noTarjeta" name="no_tarjeta" class="form-control" placeholder="0000-0000-0000-0000"/>
                            </div>
                            <div>
                                <label for="cantidad_tarjeta "> Cantidad en tarjeta </label>
                                <input id="cantidadTarja" name="cantidad_tarjeta" class="form-control" placeholder="$ 00.00">
                            </div>
                        </div>
                    `;

                    btnMixto.classList.remove('btn-success');
                    btnMixto.classList.add('btn-primary')
                })


                btnGuardarOrden.addEventListener('click', () => {

                    const data = {
                        total_pagar: totalPagar,
                        especificacion_orden: document.querySelector('#descripcion').value
                    };

                    postToServer('ordenes', data)
                        .then(resp => {
                            console.log(resp);
                            console.log('Orden guardada');
                            
                            spaceVenta.innerHTML = '';
                            spaceVenta.innerHTML += `
                                <div class="alert alert-success animate__animated animate__bounceInRight" role="alert">
                                    Orden levantada y guardada satisfactoriamente
                                </div>
                            `;

                            data.id = resp.insertId
                            ipcRenderer.send('orden-levantada', data)
                            

                            const productosGuardar = [];

                            // TODO: Arreglar las cantidades acumuladoras que se guardan en partidas
                            const liProductos = listaOrdenes.querySelectorAll('li');
                            console.log(liProductos )
                            liProductos.forEach(li => {
                                productosGuardar.push({
                                    id_producto: parseInt( li.querySelector('input').value ),
                                    cantidad: 1,
                                    importe:  parseInt( li.querySelector('.price').value ),
                                    id_orden: parseInt( divOrden.textContent )
                                });
                            });

                            console.log( productosGuardar );

                            // Guardamos en pártidas todos los productos
                            productosGuardar.forEach(productoPartida => {
                                
                                postToServer('partidas', productoPartida)
                                    .then(resp => {
                                        console.log( resp );
                                    })
                                    .catch( err => {
                                        console.log( err );
                                    });
                            });
                            
                            /**
                             * AQUI ACCEDEMOS AL PROCESO PRINCIPAL
                             * PARA INTERACTUAR CON LAS FUNCIONES
                             */
                            const main = remote.require('./index.js');
                            main.newNotification('titulo', 'mensaje');
                            // location.reload();

                            setTimeout(() => {
                                location.reload();
                            }, 1300);

                        })
                        .catch(err => {
                            console.log( err );
                        })
                }); 

                btnCancelarOrden.addEventListener('click', () => {
                    location.reload();
                });
            });

            btnCancelarVenta.addEventListener('click', () => {
                location.reload();
            });

            // Mis eventos
            ipcRenderer.on('event:back-message', ( event, mensaje ) => {
                console.log( mensaje );
            });

            ipcRenderer.on('orden-lista', ( event, id_orden ) => {

                const areaOrdenesListas = spaceVenta.querySelector('#area-ordenes-listas');
                
                const notificacionOrdenLista = `
                    <div class="alert alert-success alert-dismissible fade show mt-3 animate__animated animate__bounceInRight notificacion_orden" role="alert">
                        La orden ${ id_orden } está lista
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;

                areaOrdenesListas.innerHTML += notificacionOrdenLista;
                
                setTimeout(() => {
                    const divsNotificacionsOrdenesListas =  document.querySelectorAll('.notificacion_orden');
                    divsNotificacionsOrdenesListas.forEach(div => {
                        div.classList.remove('animate__animated');
                        div.classList.remove('animate__bounceInRight');
                    });
                }, 1000);              
            });
            
            const btnMandarMensaje = document.querySelector('#btnMandarMensaje');
            const taMessajes = document.querySelector('#taMessages');
            const inputMessages = document.querySelector('#inputMessages');
            
            btnMandarMensaje.addEventListener('click', () => {
                if ( inputMessages.value.length !== 0 ) {
                    console.log( inputMessages.value.length )
                    const message = inputMessages.value;
                    const hoy = new Date();
                    ipcRenderer.send('chat-cocinero', { message, hora: moment( hoy ).format('hh:mm a') });
                    inputMessages.value = '';
                    taMessajes.value += `Yo: ${ message }. ${ moment( hoy ).format('hh:mm a') } \n`;
                }
            });
            
            // Captamos los mensajes del cocinero
            ipcRenderer.on('chat-cajero', (event, data) => {
                taMessajes.value += `Cocinero: ${ data.message }. ${ data.hora } \n`;
                const div = document.querySelector('#notificacion-chat');
                div.innerHTML = `
                <div class="alert alert-primary alert-dismissible fade show mt-3 animate__animated animate__bounceInRight notificacion_orden" role="alert">
                    El cocinero dice: ${ data.message } ${ data.hora }
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                `
            });
            
    }).catch( err => {
        console.log(err);
    });

})();