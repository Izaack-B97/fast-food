console.log('--- almacen.js ---')

const { getToServer, putToServer } = require('./js/helpers/llamadas');
const $ = require('jquery');

(() => {

    getToServer('almacen')
        .then(almacen => {
            console.log( almacen )

            $.each(almacen, ( i, producto ) => {
                $('#areaProductos').append(`
                    <div class="col-sm-3 p-5 mr-2">
                        <div class="card mx-auto" style="width: 23rem;">
                            <input name="id-almacen" type="hidden" value=${ producto.id_almacen }>
                            <img src="${ producto.url }" class="card-img-top" alt="${ producto.producto }">
                            <div class="card-body text-center">
                                <h5 class="card-title">${ producto.producto }</h5>
                                <p class="card-text p-0 m-0">Cantidad en almacén</p>
                                <p class="card-text p-0 m-0">(Paquetes)</p>
                                <p class="card-text p-0 m-0">${ producto.cantidad }</p>
                                <a class="btn btn-vino py-2 mt-4 mx-2 btn-editar" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">EDITAR</a>
                            </div>
                        </div>
                    </div>
                `);
            });

            $('.btn-editar').on('click', ( e ) => {
                const that = $(e.currentTarget);
                const id = that.parents('.col-sm-3.p-5.mr-2').find('input').val();
                
                getToServer(`almacen/${ id }`)
                    .then(data => {
                        const producto = data[0];
                        $('#idInfo').val( producto.id_almacen );
                        $('#productoInfo').val( producto.producto );
                        $('#tipoProductoInfo').val( producto.tipo_producto );
                        $('#cantidadInfo').val( producto.cantidad );
                    })

                
                $('#btnActualizar').on('click', () => {
                    const data = {
                        producto: $('#productoInfo').val(),
                        tipo_producto: $('#tipoProductoInfo').val(),
                        cantidad: $('#cantidadInfo').val()
                    }
                    putToServer(`almacen/${ id }`, data)
                        .then(resp => {
                            // console.log( resp )
                            alert('Almacen actualizado')
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        })
                });
            });
        

        })
        .catch( err => console.log );
})();