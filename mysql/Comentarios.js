"use strict";

module.exports = function(sequelize, DataTypes) {
  var comentario = sequelize.define("comentario", {
    id_comentario: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    texto:{
        type : DataTypes.STRING
    },
    archivo:{
       type : DataTypes.STRING
    },
    comentario_padre:{
        type : DataTypes.INTEGER
    },
    usuario:{
      type : DataTypes.INTEGER
    },
    titulo:{
      type : DataTypes.STRING
    },
    posteo:{
      type : DataTypes.INTEGER
    }
  }, { freezeTableName: true,
  tableName: 'comentario'});




//Tarjeta.removeAttribute('id');
  return comentario;
};
