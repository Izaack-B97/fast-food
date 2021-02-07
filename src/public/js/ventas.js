(async function() {
    console.log('--- ventas.js ---');

    const resp = await fetch('http://localhost:3030/server/partidas');
    const data = await resp.json();

    console.log( data )
})();