const { getToServer } = require('./js/helpers/llamadas');

(() => {

    getToServer('productos')
    .then(productos => {
        console.log( productos )
        const mySpace = document.querySelector('#my-space');
        
        productos.forEach(producto => {
            mySpace.innerHTML += `
                <div class="col-3 mt-2">
                    <div class="mx-auto">
                        <img src="${ producto.url }" alt="dogo">
                    </div>
                    <form class="mx-auto mt-2 form-group">
                        <div class="form-group">
                            <select class="form-control">
                                <option value="0">Seleccione...</option>
                                <option value="1" ${ producto.id_tc === 1 && 'selected' }>Comida</option>
                                <option value="2" ${ producto.id_tc === 2 && 'selected' }>Bebidas</option>
                                <option value="3" ${ producto.id_tc === 3 && 'selected' }>Postres</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="NOMBRE" value="${ producto.nombre_producto }">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="PRECIO" value="${ producto.precio_producto }">
                        </div>
                    </form>
                </div>
            `;
        });

    })
    .catch(err => {
        console.log( err );
    });

})();