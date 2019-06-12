"use strict";

module.exports = function(sequelize, DataTypes) {
  var usuario = sequelize.define("usuario", {
    id_usuario: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id:{
        type : DataTypes.INTEGER
    },
    email:{
        type : DataTypes.STRING
    },
    password:{
       type : DataTypes.STRING
    },
    nombre:{
        type : DataTypes.STRING
    },
    apellido:{
      type : DataTypes.STRING
    },
  foto:{
    type : DataTypes.STRING
  },
rol:{
  type : DataTypes.STRING
},
clave_admin:{
  type : DataTypes.STRING
}
  }, { freezeTableName: true,
  tableName: 'usuario'});

//Tarjeta.removeAttribute('id');
  return usuario;
};
