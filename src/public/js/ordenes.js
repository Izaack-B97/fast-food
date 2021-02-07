(async function() {
    console.log('--- ordenes.js ---');
    
    const resp = await fetch('http://localhost:3030/server/ordenes');
    const data = await resp.json();

    console.log( data )
})();