const { getToServer } = require('./js/helpers/llamadas');

(() => {
    console.log('--- cocinero.js ---');

    getToServer('ordenes')
        .then(res => {
            console.log( res );
        })
        .catch(err => {
            console.log( err );
        })

})();