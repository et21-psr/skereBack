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
    created_at:{
      type: DataTypes.DATE,
      field: "created_at"
    },
    update_at:{
      type: DataTypes.DATE,
      field: "update_at"
    }
  }, { freezeTableName: true, timestamps: false,
  tableName: 'categoria'});

//Tarjeta.removeAttribute('id');
  return categoria;
};
