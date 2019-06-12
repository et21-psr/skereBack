"use strict";

module.exports = function(sequelize, DataTypes) {
  var categoria = sequelize.define("categoria", {
    id_categoria: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    categoria_padre:{
        type : DataTypes.INTEGER
    },
    nombre:{
       type : DataTypes.STRING
    },
     { freezeTableName: true,
  tableName: 'categorias'});

//Tarjeta.removeAttribute('id');
  return categoria;
};
