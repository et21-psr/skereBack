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
    usuarioId:{
      type : DataTypes.INTEGER,
      field: "usuario"
    },
    titulo:{
      type : DataTypes.STRING
    },
    posteoId:{
      type : DataTypes.INTEGER,
      field: "posteo"
    },
    createdAt:{
      type: DataTypes.DATE,
      field: "created_at"
    },
    updatedAt:{
      type: DataTypes.DATE,
      field: "update_at"
    }
  }, { freezeTableName: true, timestamps: false,
  tableName: 'comentario'});

  comentario.associate = (models) => {
    // associations can be defined here
    comentario.hasOne(models.usuario, { sourceKey: 'usuarioId' ,foreignKey: 'id_usuario' });
    comentario.hasOne(models.posteo, { sourceKey: 'posteoId' ,foreignKey: 'id_posteo' });
    comentario.hasOne(models.comentario, { sourceKey: 'comentario_padre' ,foreignKey: 'id_comentario' });
};


//Tarjeta.removeAttribute('id');
  return comentario;
};
