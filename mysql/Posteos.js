"use strict";

module.exports = function(sequelize, DataTypes) {
  var posteo = sequelize.define("posteo", {
    id_posteo: {
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
    titulo:{
        type : DataTypes.STRING
    },
    usuario:{
      type : DataTypes.INTEGER
    },
    categoria:{
      type : DataTypes.INTEGER
    }
  }, { freezeTableName: true,
  tableName: 'posteo'});
//Tarjeta.removeAttribute('id');
  return posteo;
};
