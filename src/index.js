const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

//initializations para inicializar los modulos necesarios basicos
const app = express();
require('./database');

//settings para setear el port del servidor, las rutas que se van a usar y la extension
app.set('port', process.env.PORT || 3000);// setear el puerto del server
app.set('views', path.join(__dirname, 'views'));//buscar la carpeta views
app.engine('.hbs', exphbs({
    defaultLayout: 'main.handlebars',                                  //parametro para cargar la plantilla de la web
    layoutsDir: path.join(app.get('views'), 'layouts'),     //parametro para ir a la carpeta layouts
    partialsDir: path.join(app.get('views'), 'partials'),   //parametro para ir a la carpeta partials
    extname: '.hbs'                                         //parametro para decirle a la web la extension de los archivos
}));
app.set('view engine', '.hbs'); //setear el engine con archivos hbs


//server ready para escuchar las peticiones del servidor
app.listen(app.get('port'), () =>{
    console.log("Server port ", app.get('port'));
});

//midleware aqui se ingresan los modulos que va a usar toda la web app
app.use(express.urlencoded({extended:false})); //formulario de datos para entenderlo
app.use(methodOverride('_method'));//formularios pueden enviar distintos metodos
app.use(session({
    secret: 'secret',
    resave: true,                   //autenticar y guardar usuarios
    saveUninitialized: true
}));
app.use(flash());

//routes aqui se ingresan las rutas que se van usando
app.use(require('./routes/index'));
app.use(require('./routes/users'));

//global variables estas funciones se ingresan para poder usarlas en cualquier parte no me ha funcionado aun
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_messages');
    res.locals.error_msg = req.flash('error_messages');
    next();
});


//static files
app.use(express.static(path.join(__dirname, 'public'))); //ruta de la carpeta public

