const { getToServer } = require( __dirname + '\\js\\helpers\\llamadas.js');

getToServer('partidas')
    .then(data => {
        console.log( data )
    })
    .catch(err => {
        console.log( err );
    });
