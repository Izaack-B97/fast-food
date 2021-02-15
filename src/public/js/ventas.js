const { getToServer } = require('./js/helpers/llamadas');

getToServer('partidas')
    .then(data => {
        console.log( data )
    })
    .catch(err => {
        console.log( err );
    });
