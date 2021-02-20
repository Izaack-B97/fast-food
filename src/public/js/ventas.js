
const moment = require('moment');
const { getToServer } = require('./js/helpers/llamadas');

moment.locale = 'es';

const render_productos = ( productos ) => {
    let cadena = '';
    productos.forEach(producto => {
        cadena += producto.nombre_producto + ', ';
    });
    
    return cadena;
}

(() => {
    getToServer('ordenes')
        .then(ordenes => {
            // console.log( ordenes );

            // Mandamos a llamar los productos
            getToServer('ordenes/todas/productos')
                .then(productos => {    
                    // console.log( productos ) 

                    const listaVentas = document.querySelector('#lista-ventas');

                    // Manipulamos la data
                    ordenes.sort().reverse();
                    ordenes.forEach(orden => {
                        const productosOrden = productos.filter(o => o.id_orden === orden.id_orden);
                        const cadenaProductos = render_productos( productosOrden );
                        
                        if (orden.id_orden == 41) {
                            console.log(cadenaProductos);
                        }

                        // TODO:  No muestra los  productos  de la orden

                        listaVentas.innerHTML += `
                            <li class="mt-2">     
                                <div>
                                    <div class="bg-vino icon text-white d-inline-block">
                                        ${ orden.id_orden }
                                    </div>
                                    <img src="./img/estrella.png" alt="extrellita" class="d-inline-block estrella">
                                    <p class="d-inline-block parrafo-registro">
                                        <small class="d-block ">
                                            <b>${ moment( orden.create_at ).format('dddd ,DD-MM-YYYY, h:mm a ') }</b>
                                        </small>
                                        <small class="d-block">
                                            venta: <span id="productos-venta"></span>
                                        </small>
                                    </p>
                                </div>
                            </li>
                        `;   
                    });
                })
        })
        .catch(err => {
            console.log( err )
        });
})();