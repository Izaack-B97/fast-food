const { getToServer, postToServer } = require('./js/helpers/llamadas'); // Tiene que ser relativo al html

(() => {
    console.log('--- ordenes.js ---');

    getToServer('ordenes')
        .then(resp => {
            console.log( resp );
        })
        .catch(err => {
            console.log(err);
        });

    const btnRegistrar = document.querySelector('#btn-registrar');
    const inputTotal = document.querySelector('#total');
    const inputDescripcion = document.querySelector('#descripcion');
    const btnNuevaVentana = document.querySelector('#btnNuevaVentana')
    
    // Accion para registrar ordenes
    btnRegistrar.addEventListener('click', () => {

        const data = {
            total_pagar: inputTotal.value,
            especificacion_orden: inputDescripcion.value
        }

        postToServer('ordenes', data)
            .then(resp => {
                window.location = '/';

            })
            .catch(err => {
                console.log( err )
            })
    });


    btnNuevaVentana.addEventListener('click', () => {
        const electron = require('electron');
        const path = require('path');
        const BrowserWindow = electron.remote.BrowserWindow;
        const url = path.join('file://', __dirname, 'cocinero.html');
        const win = new BrowserWindow({
            height: 500,
            width: 500,
            webPreferences: {
                nodeIntegration: true 
            }
        });

        win.show();
    });

})();