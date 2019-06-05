require('./config/config')

const express = require('express')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/index'));

mongoose.connect(process.env.URL_DB, { useNewUrlParser: true, useCreateIndex: true }, (err) => {

    if (err) {
        throw err;
    } else {
        console.log('Base de datos online');
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
})


/**
 * 
 * Usuario Atlas Mongodb
 * 
 * user: strider
 * pass: BCEeVogiIlPokTu1
 * role: atlasAdmin@admin
 * 
 * 
 * MongoDB connection local:  mongodb://localhost:27017/cafe
 * 
 * MongoDB connection remote: mongodb+srv://strider:BCEeVogiIlPokTu1@cluster0-jsnvt.mongodb.net/cafe
 * 
 */