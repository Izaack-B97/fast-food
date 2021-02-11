const { getToServer } = require('./js/helpers/llamadas');

getToServer('ordenes')
    .then(data => {
        console.log( data )
    })  
    .catch(err => {
        console.log( err );
    });
