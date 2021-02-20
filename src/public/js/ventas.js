
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
    getToServer('ordenes/informacion/general/todas')
        .then(data => {
            console.log( data )

            const listaVentas = document.querySelector('#lista-ventas');

            // Manipulamos la data
            data.sort().reverse();
            
            data.forEach(orden => {
                listaVentas.innerHTML += `
                    <li>
                        <div>
                            <div class="bg-vino icon text-white d-inline-block">
                                ${ orden.id_orden }
                            </div>
                            <img src="./img/estrella.png" alt="estrellita" class="estrellita mb-1">
                            <p class="d-inline-block pt-5">
                                <small>
                                    <b>${ moment( orden.created_at ).format('dddd , DD-MM-YYYY, hh:mm a') }</b>
                                </small>
                                <small class="d-block">venta: ${ orden.nombre_producto }, cantidad: ${ orden.cantidad }, total: $ ${ orden.total_orden }.</small>
                            </p>
                        </div>
                    </li>
                `;  
            });
        

    })
    .catch(err => {
        console.log( err );
    })
})();