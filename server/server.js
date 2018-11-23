require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require("path");

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use( require('./routes/index'));

// parse application/json
app.use(bodyParser.json());

//habilitar public
app.use(express.static(path.resolve(__dirname , '../public')));

mongoose.connect(process.env.urlDB, (err, res) => {
    if(err) throw err;
    console.log('BD online');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});