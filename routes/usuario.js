var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.usuario.findAll().then(result => {
      res.status(200).jsonp(result);
  })
  console.log('llego')
});
//Obtener
router.get('/:id', function(req, res, next){

  let id = req.params.id;
  models.usuario.findOne({
    where: {
      id_usuario: id
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("no existe");
    }
    res.status(200).jsonp(result);
  })
});
//Eliminar
router.delete('/:id', function(req, res, next){

  let id = req.params.id;
  models.usuario.destroy({
    where: {
      id_usuario: id
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("no existe");
    }
    res.status(200).jsonp(result);
  })
});
//Post
router.post('/', function(req, res, next){
  let usuario = req.body;
  models.usuario.create(usuario).then(result => {
    res.status(200).jsonp({status:true , response:"se creo con exito"});
  })

});
module.exports = router;
