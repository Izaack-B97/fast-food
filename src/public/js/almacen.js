console.log('--- almacen.js ---')

const { getToServer, putToServer, postToServer, deleteToServer } = require('./js/helpers/llamadas');
const $ = require('jquery');

(() => {

    getToServer('almacen/todos/tipos_productos')
        .then(tipos => {
            console.log( tipos )
            tipos.forEach(tipo => {
                $('#tiposOptions').append(`
                    <option value=${ tipo.tipo_producto }>${ tipo.tipo_producto }</option>
                `);
            });
        })
        .catch( err => console.log );

    getToServer('almacen')
        .then(almacen => {
            // console.log( almacen )

            const renderProductos = () => {
                $('#areaProductos').html('');
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
                                    <input name="tipo_producto_almacen" type="hidden" value="${ producto.tipo_producto }"/>
                                    <a class="btn btn-vino py-2 mt-4 mx-2 btn-editar" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">EDITAR</a>
                                </div>
                            </div>
                        </div>
                    `);
                });
            }

            renderProductos();

            $.each(almacen, ( i, producto ) => {

                $('#lista-productos-eliminar').append(`
                    <li class="my-1">
                        <img src="${ producto.url }" alt="${ producto.producto }" class="d-inline-block">
                        <p class="lead d-inline-block">${ producto.producto }</p>
                        <div class="form-check d-inline-block pull-right py-3">
                            <input type="hidden" value="${ producto.id_almacen }" class="id">
                            <input type="checkbox" class="form-check-input eliminar">
                        </div>
                        <div class="clearfix"></div>
                    </li>
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
                        $('#urlImagenInfo').val( producto.url );
                    })

                $('#btnActualizar').on('click', () => {
                    const data = {
                        producto: $('#productoInfo').val(),
                        tipo_producto: $('#tipoProductoInfo').val(),
                        cantidad: $('#cantidadInfo').val(),
                        url: $('#urlImagenInfo').val()
                    }

                    if ( data.producto === '' || data.tipo_producto === '' || data.cantidad === '' || data.url === '') {
                        alert('Todos los campos son obligatorios')
                    } else {
                        putToServer(`almacen/${ id }`, data)
                            .then(resp => {
                                console.log( resp )
                                alert('Almacen actualizado')
                                setTimeout(() => {
                                    window.location.reload();
                                }, 500);
                            })
                    }
                });
            });
            
            $('#btnRegistrar').on('click', () => {

                const producto = $('#producto').val();
                const tipo_producto = $('#tipo_producto').val();
                const cantidad = $('#cantidad').val();
                const url = $('#url').val();

                if ( producto === '' || tipo_producto === '' || cantidad === '' || url  === '' ) {
                    alert('Todos los campos son obligatorios');
                } else {
                    const data = {
                        producto,
                        tipo_producto,
                        cantidad,
                        url
                    }

                    postToServer('almacen', data)
                        .then(resp => {
                            alert('Producto registrado en el almacen')
                            setTimeout(() => {
                                location.reload();
                            }, 500);
                        });
                }
            });

            $('#btnEliminarProductos').on('click', () => {
                const checks = $('#lista-productos-eliminar .eliminar').map(( i, check ) => {
                    const productosEliminar = [];
                    if ( check.checked ) {
                        productosEliminar.push($(check).parents('li').find('.id').val());
                    }
                    return productosEliminar;
                });
                
                if ( checks.length === 0 ) {
                    alert('¿Qué productos desea eliminar?')
                } else {

                    $.each( checks, ( i, check_id ) => {
                        deleteToServer(`almacen/${ check_id }`)
                            .then(resp => {
                                console.log( resp );
                            });
                    })

                    alert('Productos eliminados correctamente');
                    setTimeout(() => {
                        location.reload();
                    }, 500);
                }
            });

            $('#tiposOptions').change((e) => {
                const value = $('#tiposOptions').val();
                
                if ( value === 'todos' ) {
                    renderProductos();
                } else {
                    const arrayTiposProductos = $('input[name="tipo_producto_almacen"]');
                    
                    $.each( arrayTiposProductos, ( i, input) => {
                        if ( $( input ).val() !== value ) {
                            $( input ).parents('div.col-sm-3.p-5.mr-2').css('display', 'none')
                        } else {
                            $( input ).parents('div.col-sm-3.p-5.mr-2').css('display', '').addClass('animate__animated animate__fadeIn');                    
                        }
                    });
                }
            })

        })
        .catch( err => console.log );
})();