console.log('Aqui llegue')

const { getToServer, postToServer } = require('./js/helpers/llamadas');
const $ = require('jquery');



const btnAction =  $('#btnAction');
const draw_form = ( tpl_form, spanActionText, activeSucursal, activeEmpleado ) => {
    const mySpace = $('#myspace');
    const spanAction = $('#spanAction');
    
    mySpace.html('');
    mySpace.append( tpl_form );
    
    spanAction.text( spanActionText );
    
    btnAction.attr('data-sucursal', activeSucursal);
    btnAction.attr('data-empleado', activeEmpleado);
}



(() => {

getToServer('admin/empleados')
    .then(empleados => {
        // console.log( empleados )
        getToServer('admin/sucursales')
            .then(sucursales => {
                // console.log( sucursales )
                getToServer('admin/equipos')
                    .then(equipos => {

                        const area_empleados = $('#area-empleados');
                        equipos.sort(function (a, b) {
                            if (a.descripcion_equipo > b.descripcion_equipo) {
                                return 1;
                            }
                            if (a.descripcion_equipo < b.descripcion_equipo) {
                                return -1;
                            }
                            // a must be equal to b
                            return 0;
                        });
                        
                        // console.log( equipos );

                        sucursales.sort(function (a, b) {
                            if (a.nombre_sucursal > b.nombre_sucursal) {
                                return 1;
                            }
                            if (a.nombre_sucursal < b.nombre_sucursal) {
                                return -1;
                            }
                            // a must be equal to b
                            return 0;
                        });
                        sucursales.forEach(sucursal => {
                            // console.log( sucursal )

                            $('#selectSucursales').append(`
                                <option value=${ sucursal.id_sucursal }>${ sucursal.nombre_sucursal }</option>
                            `)
                        });
        
                        const renderEmpleados = () => {
                            empleados.forEach(empleado => {
                            
                                area_empleados.append(`
                                    <div class="col-6 p-5 padre">
                                        <input name="idSucursal" type="hidden" value=${ empleado.id_sucursal }>
                                        <div>
                                            <img class="pull-left" src="${ empleado.url === null ? './img/user.png' : empleado.url}" alt="user">
                                            <div class="pull-right container-info">
                                                <p>
                                                    
                                                        <strong>${ empleado.nombre_empleado }</strong>
                                                </p>
                                                <p>Puesto: ${ empleado.puesto }</p>
                                                <p>Entrada: ${ empleado.entrada }</p>
                                                <p>Salida: ${ empleado.salida }</p>
                                                <p>
                                                    <i class="fab fa-google my-2">&nbsp;Empleado1@gmail.com</i>
                                                </p>
                                                <p>
                                                    <i class="fas fa-phone-alt my-2">&nbsp;${ empleado.celular }</i>                 
                                                </p>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                `);
                            });    
                        }

                        renderEmpleados();

                        $( '#selectSucursales' ).change(( e ) => {
                            // console.log( e.target.value );
                            const idSucursal = e.target.value;
    
                            if ( idSucursal === '0' ) {
                                renderEmpleados();
                            } else {
                                const ids_sucursales_empleados = $('input[name="idSucursal"]');
                                $.each(ids_sucursales_empleados, ( id, input) => {
                                    if ( $( input ).val() !== idSucursal ) {
                                        $( input ).closest('.padre').hide();
                                    } else {
                                        $( input ).closest('.padre').show().addClass('animate__animated animate__fadeIn');;
                                    }
                                });
                            }
                        });
                        
                        const draw_form = ( tpl_form, spanActionText, activeSucursal, activeEmpleado ) => {
                            const mySpace = $('#myspace');
                            const spanAction = $('#spanAction');
                    
                            mySpace.html('');
                            mySpace.append( tpl_form );
                            
                            spanAction.text( spanActionText );
                    
                            btnAction.attr('data-sucursal', activeSucursal);
                            btnAction.attr('data-empleado', activeEmpleado);
                        }
        
                        $('#btnCrearSucursal').on('click', () => {
                            const tpl = `
                            <form>
                                <div class="form-group">
                                    <label for="nombre">Nombre</label>
                                    <input type="text" name="nombre" class="form-control" id="nombreSucursal" placeholder="Escriba la sucursal">
                                </div>
                                <div class="form-group">
                                    <label for="encargado">Encargado</label>
                                    <select id="encargadoSucursal" class="form-control">
                                        <option disabled selected>Seleccione...</option>
                                    </select>
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

                            $.each( empleados, (i, empleado) => {
                                $('#encargadoSucursal').append(`
                                    <option value="${ empleado.nombre_empleado }">${ empleado.nombre_empleado }</option>
                                `);
                            })
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
                                        <label for="exampleFormControlSelect1">Sexo</label>
                                        <select class="form-control" id="sexo">
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
                                        <select class="form-control" id="sucursalEmpleado">
                                            <--! Aqui van las sucursales  -->
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Equipos de trabajo</label>
                                        <select class="form-control" id="equiposTrabajo">
                                            <--! Aqui van las sucursales  -->
                                        </select>
                                    </div>
                                </form>
                            `;
                            
                            draw_form( tpl, 'empleado', false, true );
                            // console.log( sucursales )
                            sucursales.forEach(sucursal => {
                                $('#sucursalEmpleado').append(`
                                    <option value=${ sucursal.id_sucursal }>${ sucursal.nombre_sucursal }</option>
                                `);
                            })
                            equipos.forEach(equipo => {
                                $('#equiposTrabajo').append(`
                                    <option value=${ equipo.id_equipo }>${ equipo.descripcion_equipo }</option>
                                `);
                            });

                            
                            
                        });
                        
                        const registrar_nuevo_item = ( apartado ) => {
        
                            let data;
                            if ( apartado === 'empleado' ) {
                            
                                data = {
                                    nombre_empleado: $('#nombreEmpleado').val(),
                                    celular: $('#celular').val(),
                                    sexo: $('#sexo').val(),
                                    puesto: $('#puestoEmpleados').val(),
                                    edad: parseInt( $('#edad').val() ),
                                    hora_entrada: $('#horaEntrada').val(),
                                    hora_salida: $('#horaSalida').val(),
                                    id_sucursal: parseInt( $('#sucursalEmpleado').val() ),
                                    id_equipo: parseInt( $('#equiposTrabajo').val() )
                                }
                                
                                // console.log( data )
                                
                                if  ( 
                                        data.celular === '' || 
                                        data.edad === NaN ||
                                        data.hora_entrada === '' ||
                                        data.hora_salida === '' ||
                                        data.nombre_empleado === '' ||
                                        data.puesto === ''
                                    ) 
                                {
                                    alert('Todos los campos son requeridos')                                        
                                } else {
                                    postToServer('admin/empleados', data)
                                        .then(res => {
                                            console.log( res )
                                            window.location.reload();
                                        })
                                        .catch( err => console.log )
                                }

                            } else {
                                // Registro de sucursal
                                data = {
                                    nombre_sucursal: $('#nombreSucursal').val(),
                                    nombre_encargado:  $('#encargadoSucursal').val(),
                                    direccion_sucursal:  $('#direccionSucursal').val(),
                                    celular_sucursal:  $('#celularSucursal').val()
                                }

                                if ( data.nombre_sucursal === '' || data.nombre_encargado === '' || data.direccion_sucursal === '' || data.celular_sucursal === '' ) {
                                    alert('Todos los campos son requeridos');
                                } else {
                                    postToServer('admin/sucursales', data)
                                        .then(res => {
                                            // console.log( res );
                                            window.location.reload();
                                        })
                                        .catch( err => console.log );
                                }

                            }
                        };
        
                        btnAction.on('click', () => {
                    
                            if ( btnAction.attr( 'data-empleado' ) === 'true') {
                                registrar_nuevo_item( 'empleado' )
                            }
                    
                            if ( btnAction.attr( 'data-sucursal' ) === 'true') {
                                registrar_nuevo_item( 'sucursal' )
                            }
                        });
                    });
            });
    })
    .catch(err => {
        console.log( err )
    })

})();