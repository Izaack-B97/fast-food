const { getToServer } = require('./js/helpers/llamadas');

getToServer('productos')
    .then(data => {
        console.log( data )
    })
    .catch(err => {
        console.log( err );
    });


