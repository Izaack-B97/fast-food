const { getToServer } = require('./js/helpers/llamadas');

(() => {
    const $ = require('jquery');
    const btnAction =  $('#btnAction');

    const draw_form = ( tpl_form, spanActionText, activeSucursal, activeEmpleado ) => {
        const mySpace = $('#myspace');
        const spanAction = $('#spanAction');

        mySpace.html('');
        mySpace.append( tpl_form );
        
        spanAction.text( spanActionText );

        btnAction.attr('data-sucursal', activeSucursal)
        btnAction.attr('data-empleado', activeEmpleado);
    }
 
    $( '#selectSucursales' ).change(( e ) => {
        console.log( e.target.value );
    });

    $('#btnCrearSucursal').on('click', () => {
        const tpl = `
        <form>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" class="form-control" id="nombreSucursal" placeholder="Escriba la sucursal">
            </div>
            <div class="form-group">
                <label for="encargado">Encargado</label>
                <input type="text" name="encargado" class="form-control" id="encargadoSucursal" placeholder="Nombre del responsable">
            </div>
            <div class="form-group">
                <label for="direccion">Dirección</label>
                <input type="text" name="direccion" class="form-control" id="direccionSucursal" placeholder="Direccion de la sucursal">
            </div>
            <div class="form-group">
                <label for="celular">Celular</label>
                <input type="text" name="celular" class="form-control" id="celularSucursal" placeholder="Celular de la sucursal">
            </div>
        </form>
        `;
        
        draw_form( tpl, 'sucursal', true, false );
    });

    $('#btnCrearEmpleado').on('click', () => {
        const tpl = `
            <form>
                <div class="form-group">
                    <label for="nombreEmpleado">Nombre</label>
                    <input type="text" name="nombreEmpleado" class="form-control" id="nombreEmpleado" placeholder="Escriba su nombre">
                </div>
                <div class="form-group">
                    <label for="puesto">Puesto</label>
                    <input type="text" name="puesto" class="form-control" id="puestoEmpleados" placeholder="Gerente">
                </div>
                <div class="form-group">
                    <label for="edad">Edad</label>
                    <input type="number" name="edad" class="form-control" id="edad">
                </div>
                <div class="form-group">
                    <label for="celular">Celular</label>
                    <input type="text" name="celuar" class="form-control" id="celular">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Sucursal</label>
                    <select class="form-control" id="">
                        <option>Hombre</option>
                        <option>Mujer</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="horaEntrada">Hora de entrada</label>
                    <input type="time" name="horaEntrada" class="form-control" id="horaEntrada">
                </div>
                <div class="form-group">
                    <label for="horaSalida">Hora de salida</label>
                    <input type="time" name="horaSalida" class="form-control" id="horaSalida">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Sucursal</label>
                    <select class="form-control" id="">
                        <option>Norte</option>
                        <option>Sur</option>
                        <option>Poniente</option>
                    </select>
                </div>
            </form>
        `;
        
        draw_form( tpl, 'empleado', false, true );
    });

    btnAction.on('click', () => {
        
        getToServer('admin/empleados')
            .then(res => {
                console.log( res )
            })
            .catch(err => {
                console.log( err )
            })

        if ( btnAction.attr( 'data-empleado' ) === 'true') {
            console.log('empleado')
        }

        if ( btnAction.attr( 'data-sucursal' ) === 'true') {
            console.log('sucursal');
        }
    })

})();