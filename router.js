const express = require('express');
const router = express();
const conexion = require('./database/db');

router.get('/', function(req, res, next){

    conexion.query('SELECT * FROM platillos', (err, results)=>{
        if(err){
            throw err;
        }else{
            res.render('index', {results:results});
        }
    })
})

router.get('/create', function(req, res, next){
    res.render('create');
})

router.get("/edit/:id", (req, res)=>{
    const id = req.params.id;
    conexion.query("SELECT * FROM platillos WHERE cod_Platillo=?", [id], (err, results)=>{
        if(err){
            console.log(err, id);
        }else{
            res.render('edit', {platillo:results[0]});
        }
    })
});

router.get("/delete/:id", (req, res)=>{
    const id = req.params.id;
    conexion.query("DELETE FROM platillos WHERE cod_Platillo=?", [id], (err, results)=>{
        if(err){
            console.log(err, id);
        }else{
            res.redirect('/');
        }
    })
});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);


module.exports = router;