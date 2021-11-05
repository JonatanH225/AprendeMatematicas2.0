const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

//esquema de datos para pasar a la base de datos
const UserSchema = new Schema ({
    nombre: {type: String, require: true},
    apellido: {type: String, require: true},
    email: {type:String, require:true},
    password: {type:String, require:true},
    edad: {type:String, require:true},
    grado: {type:String, require:true},
    date: {type: Date, default:Date.now}
});

//cifrar contraseña
UserSchema.methods.encrypPassword = async(password) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return (hash);
};

//comparar el hash de la contraseña al ingresar
UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

//exportar el esquema para usarlo en otros
module.exports = mongoose.model('User', UserSchema);