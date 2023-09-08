const conexion = require('../database/db');

exports.save = function(req, res, next){
    const plato = req.body.plato;
    const ingredientes = req.body.ingredientes;
    const platillosact = parseInt(req.body.platillosact);
    conexion.query(`INSERT INTO platillos (name_Platillo, Ingredientes, Platillos_Activos) VALUES ('${plato}', '${ingredientes}', ${platillosact})`, (err, results)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
}

exports.update = (req, res)=>{
    const id = req.body.id;
    const plato = req.body.plato;
    const ingredientes = req.body.ingredientes;
    const platillosact = parseInt(req.body.platillosact);
    conexion.query("UPDATE platillos SET name_Platillo=?, Ingredientes=?, Platillos_Activos=? WHERE cod_Platillo=?", [plato, ingredientes, platillosact, id], (err, results)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
}