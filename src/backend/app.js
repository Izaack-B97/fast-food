require('./database');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = process.env.PORT || 3030;

app.use( bodyParser.urlencoded({ extended: true }) ); 
app.use( bodyParser.json() );

// Routes
app.use('/server', require('./routes/index'));

app.listen(port, () => {
    console.log('Server on port ' + port);
});

