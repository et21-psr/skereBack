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
    created_at:{
      type: DataTypes.DATE,
      field: "created_at"
    },
    update_at:{
      type: DataTypes.DATE,
      field: "update_at"
    }
  }, { freezeTableName: true, timestamps: false,
  tableName: 'posteo'});

  posteo.associate = (models) => {
    // associations can be defined here
    posteo.hasOne(models.usuario, { foreignKey: 'id_usuario' });
    posteo.hasOne(models.categoria, { sourceKey: 'categoriaId' ,foreignKey: 'id_categoria' });
};
//Tarjeta.removeAttribute('id');
  return posteo;
};
