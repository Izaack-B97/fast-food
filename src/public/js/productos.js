const { getToServer, putToServer } = require('./js/helpers/llamadas');

(() => {

    getToServer('productos')
    .then(productos => {
        // console.log( productos )
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

    })
    .catch(err => {
        console.log( err );
    });

})();