var express = require('express');
var router = express.Router();
var models = require("./../mysql");
var Sequelize = require('sequelize');

const Op = Sequelize.Op;
/* GET users listing. */

router.get('/', function(req, res, next) {

  models.posteo.findAll({
    include: [
      {model:models.usuario},
      {model:models.categoria},

    ]
  }).then(result => {
    res.status(200).jsonp(result);

  })
});

//Obtener
router.get('/:id', function(req, res, next){

  let id = req.params.id;
  models.posteo.findOne({
    include: [
      {model:models.usuario},
      {model:models.categoria},

    ],
    where: {
      id_posteo: id
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
  models.posteo.destroy({
    where: {
      id_posteo: id
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
  let posteo = req.body;
  models.posteo.create(posteo, {
    include: [
      {model:models.usuario},
      {model:models.categoria}
    ]
  }).then(result => {
    res.status(200).jsonp({status:true , response:"se creo con exito"});
  })

});
//Obtener por id de categoria
router.get('/categoria/:id', function(req, res, next){

  let id = req.params.id;
  models.posteo.findAll({
    include: [
      {model:models.usuario},
      {model:models.categoria},

    ],
    where: {
      categoriaId: id
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("no existe");
    }
    res.status(200).jsonp(result);
  })
});

//Obtener
router.get('/titulo/:titulo', function(req, res, next){

  let titulo = req.params.titulo;
  models.posteo.findAll({
    include: [
      {model:models.usuario},
      {model:models.categoria}
    ],
    where: {
      titulo: {[Op.substring]: titulo}
    }
  }).then(result => {
    if(result== null){
      res.status(200).jsonp("no existe");
    }
    res.status(200).jsonp(result);
  })
});
module.exports = router;
