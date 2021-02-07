
(async function() {
    console.log('--- productos.js ---');

    const resp = await fetch('http://localhost:3030/server/productos');
    const data = await resp.json();

    console.log( data )

})();