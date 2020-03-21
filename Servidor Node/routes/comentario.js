var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.comentario.findAll({
    include: [
    {model:models.usuario}

  ]}).then(result => {
    res.status(200).jsonp(result);

  })
  console.log('llego');
});
//Obtener
router.get('/:id', function(req, res, next){

  let id = req.params.id;
  models.comentario.findOne({
    where: {
      id_comentario: id
    },
    include: [
      {model:models.usuario}
    ]
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
  models.comentario.destroy({
    where: {
      id_comentario: id
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
  let comentario = req.body;
  models.comentario.create(comentario).then(result => {
    res.status(200).jsonp({status:true , response:"se creo con exito"});
  })

});

//Obtener por id de posteo
router.get('/posteo/:id', function(req, res, next){

  let id = req.params.id;
  models.comentario.findAll({
    include: [
              {model:models.usuario}],
    where: {
      posteo: id
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("no existe");
    }
    res.status(200).jsonp(result);
  })
});

//Obtener por id de comentario padre
router.get('/comentario_padre/:id', function(req, res, next){

  let id = req.params.id;
  models.comentario.findAll({
    include: [
              {model:models.usuario}],
    where: {
      comentario_padre: id
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("no existe");
    }
    res.status(200).jsonp(result);
  })
});
module.exports = router;
