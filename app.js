const express = require('express');
const app = express();
// const mysql = require('mysql');
const conexion = require('./database/db');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express(JSON));
app.use(express.static("public"));
app.use('/', require('./router'))

// app.get('/', function(req, res, next){
//     let sql = "SELECT * FROM clientes";
//     conexion.query(sql, function(err, results){
//         if(err) throw err; 
//         res.send(results);
//     })
// })

app.listen(5000, ()=>{
    console.log('Server corriendo en http://localhost:5000')
});