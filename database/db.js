const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'password',
    database: 'sakila',
    table: 'platillos'
})

conexion.connect(function(err){
    if(err){
        console.error('El error de conexión es: ' +err);
        return
    } 
    console.log('¡Base de datos conectada!');
});

module.exports = conexion;