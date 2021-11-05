const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Swal = require('sweetalert2');

//rutas para la carpeta users, aqui toca crear todas las rutas para poder anclar el paso con botones o con menús
router.get('/users/registro', (req,res) =>{
    res.render('users/registro');
});

router.get('/users/login', (req,res) =>{
    res.render('users/login');
});

router.get('/users/perfil', (req,res) =>{
    res.render('users/perfil');
});

router.get('/users/crud', (req,res) =>{
    res.render('users/crud');
});

router.get('/users/grados', (req,res) =>{
    res.render('users/grados');
});

router.get('/users/juegos', (req,res) =>{
    res.render('users/juegos');
});

router.get('/users/temasGrado1/temas1', (req,res) =>{
    res.render('users/temasGrado1/temas1');
});

router.get('/users/temasGrado1/ejercicios1', (req,res) =>{
    res.render('users/temasGrado1/ejercicios1');
});


//este post es para registrar los usuarios en la base de datos
//res.render es para renderizar la vista, res.redirect es para redirigir a otra pagina

router.post('/users/registro', async(req,res) =>{
    const {nombre, apellido, email, password, edad, grado } = req.body;//este es el arreglo json con los datos, rep.body quiere decir que toma los datos del cuerto del formulario
    const error = [];
    if(nombre.length <=0){
        error.push({text: 'El campo nombre no puede estar vacio.'});//faltan las alertas no se las he podido colocar
    }
    if(password.length < 6){
        error.push({text: 'La contraseña debe ser de al menos 6 caracteres.'});//faltan las alertas no se las he podido colocar
    }
    if(error.length > 0){
        res.render('users/registro', {error, nombre, apellido, email, password, edad, grado});//este es para si hay error en los datos renderiza la misma vista con los datos que se ingresaron para no volverlos a ingresar
    }else{
        const emailUser = await User.findOne({email: email});//este metodo es para comprobar que el email ya existe y no crea otro usuario
        if(emailUser){                                       //este ya sirve falta la alerta en pantalla, no he podido poner el sweetalert aun   
            console.log('El email ya existe y el usuario esta registrado.');
            res.redirect('/users/registro');
        }else{
            const newUser = new User({nombre, apellido, email, password, edad, grado});//este metodo crea y pasa el usuario a la base de datos
            newUser.password = await newUser.encrypPassword(password);                 //ya sirve faltan las alertas de sweet alert 
            await newUser.save();
            console.log('Te has registrado correctamente.');
            res.redirect("users/login?success=true&message=Register Successfully");
        }
            
    }

});




module.exports = router;