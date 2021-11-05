const mongoose = require('mongoose');//trae el modulo de monggose para conectar js con mongo

mongoose.connect('mongodb://localhost/Aprende_matematicas_db')//esta es la ruta de la base de datos

.then(db => console.log('DB ready'))//si conecta bien manda el mensaje por consola
.catch(err => console.log(err))//si no se conecta manda el erro por consola