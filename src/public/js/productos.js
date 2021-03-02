const { getToServer, putToServer, deleteToServer } = require('./js/helpers/llamadas');

(() => {

getToServer('productos')
    .then(productos => {
        console.log( productos )
        const mySpace = document.querySelector('#my-space');
        const divNotificacion = document.querySelector('#notificacion');

        productos.forEach(producto => {
            mySpace.innerHTML += `
                <div class="col-3 mt-2">
                    <div class="mx-auto">
                    <img src="${ producto.url }" alt="dogo">
                    </div>
                    <form class="mx-auto mt-2 form-group">
                        <div class="form-group">
                        <input name="id" type="text" class="form-control" placeholder="ID" value="${ producto.id_producto }" disabled>
                        </div>
                        <div class="form-group">
                            <select name="tipo_comida" class="form-control">
                                <option value="0">Seleccione...</option>
                                <option value="1" ${ producto.id_tc === 1 && 'selected' }>Comida</option>
                                <option value="2" ${ producto.id_tc === 2 && 'selected' }>Bebidas</option>
                                <option value="3" ${ producto.id_tc === 3 && 'selected' }>Postres</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input name="nombre" type="text" class="form-control" placeholder="NOMBRE" value="${ producto.nombre_producto }">
                        </div>
                        <div class="form-group">
                            <input name="precio" type="text" class="form-control" placeholder="PRECIO" value="${ producto.precio_producto }">
                        </div>
                    </form>
                </div>
            `;
        });

        const btnGuardar = document.querySelector('#btnGuardar');
        btnGuardar.addEventListener('click', () => {
            const forms = document.querySelectorAll('form');
            forms.forEach(form  => {
                const id = form.querySelector('input[ name="id" ]').value,

                datos = {
                    "nombre_producto": form.querySelector('input[ name="nombre" ]').value,
                    "id_tc": form.querySelector('select[ name="tipo_comida" ]').value,
                    "precio_producto": parseFloat( form.querySelector('input[ name="precio" ]').value )
                };

                putToServer(`productos/${ id }`, datos)
                    .then(resp => {
                        console.log( resp )
                    })
                    .catch(err => {
                        console.log( err );
                    });
            });

            divNotificacion.innerHTML += `
                <div id="notificacionOrdenLista" class="alert alert-success text-center mt-3 animate__animated animate__bounceInRight notificacion_orden" role="alert">
                    Todo se guardo satisfactoriamente
                </div>
            `;

            setTimeout(() => {
                location.reload();
            }, 1500);
        });

        
        const btnBorrar = document.querySelector('#btnBorrar');
        const btnConfirmarEliminacion = document.querySelector('#btnConfirmarEliminacion');
        const listaProductosEliminar = document.querySelector('#lista-productos-eliminar');

        btnBorrar.addEventListener('click', () => {
            btnConfirmarEliminacion.removeAttribute('disabled');
            productos.forEach(producto => {
                listaProductosEliminar.innerHTML += `
                    <li class="my-1">
                        <img src="${ producto.url }" alt="${ producto.nombre_producto }" class="d-inline-block">
                        <p class="lead d-inline-block">${ producto.nombre_producto }</p>
                        <div class="form-check d-inline-block pull-right py-3">
                            <input type="hidden" value="${ producto.id_producto }" class="id">
                            <input type="checkbox" class="form-check-input eliminar">
                        </div>
                        <div class="clearfix"></div>
                    </li>
                `;
            });
        });

        btnConfirmarEliminacion.addEventListener('click', () => {
            const arrayInputs = listaProductosEliminar.querySelectorAll('.form-check');
            const productosIdEliminar = [];
            arrayInputs.forEach(div => {
                const check =  div.querySelector('.eliminar');
                if ( check.checked ) {
                    const id = parseInt( div.querySelector('.id').value );
                    productosIdEliminar.push( id );
                    check.setAttribute('disabled', true);   
                }
            })

            if ( productosIdEliminar.length === 0 ) {
                alert('Aún no haz seleccionado ningún producto a eliminar')
            } else {
                productosIdEliminar.forEach(id => {
                    deleteToServer(`productos/${ id }`)
                        .then(resp => {
                            // console.log( resp ) 
                        })
                        .catch(err => {
                            console.log( err );
                        });
                });

                const notificacionDelete = document.querySelector('#notificacionDelete');
                notificacionDelete.textContent = 'Productos eliminados satisfactoriamente ✔';
                notificacionDelete.classList.add('animate__animated');
                notificacionDelete.classList.add('animate__fadeInRight');
                notificacionDelete.classList.add('text-success');

                setTimeout(() => {
                    location.reload();
                }, 1300);
            }

        })

    })
    .catch(err => {
        console.log( err );
    });

})();