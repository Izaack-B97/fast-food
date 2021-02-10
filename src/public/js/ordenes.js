const { getToServer } = require( __dirname + '\\js\\helpers\\llamadas.js');

getToServer('ordenes')
    .then(data => {
        console.log( data )
    })
    .catch(err => {
        console.log( err );
    });
