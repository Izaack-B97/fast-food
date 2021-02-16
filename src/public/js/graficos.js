const { getToServer } = require('./js/helpers/llamadas');

(function() {
    console.log('--- graficos.js ---');

    getToServer('partidas')
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
        })

})();