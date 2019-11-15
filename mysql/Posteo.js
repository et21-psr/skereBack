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
    usuarioId:{
      type : DataTypes.INTEGER,
      field: "usuario"
    },
    categoriaId:{
      type : DataTypes.INTEGER,
      field: "categoria"

    },
    createdAt:{
      type: DataTypes.DATE,
      field: "created_at"
    },
    updatedAt:{
      type: DataTypes.DATE,
      field: "updated_at"
    }
  }, { freezeTableName: true,
  tableName: 'posteo'});

  posteo.associate = (models) => {
    // associations can be defined here
    posteo.hasOne(models.usuario, { foreignKey: 'id_usuario' });
    posteo.hasOne(models.categoria, { sourceKey: 'categoriaId' ,foreignKey: 'id_categoria' });
};
//Tarjeta.removeAttribute('id');
  return posteo;
};
