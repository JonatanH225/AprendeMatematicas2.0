const express = require('express');
const router = express.Router();

//este archivo es para cargar la ruta del index y la que se necesite que este sobre la carpeta views
router.get('/', (req,res) =>{
    res.render('index');
});

module.exports = router;//este export sirve para que exporte las rutas y las pueda leer el hbs o html