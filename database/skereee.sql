create database skereee;
use skereee;
CREATE TABLE `categorias` (
  `id_categorias` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_padre` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_categorias`)
);

CREATE TABLE `comentarios` (
  `idcomentarios` int(11) NOT NULL AUTO_INCREMENT,
  `texto` longtext,
  `archivo` varchar(45) DEFAULT NULL,
  `comentarioPadre` int(11) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `posteo` int(11) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`idcomentarios`)
);

CREATE TABLE `posteos` (
  `idposteos` int(11) NOT NULL,
  `texto` longtext,
  `archivo` varchar(45) DEFAULT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`idposteos`)
);

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `contrasena` varchar(45) DEFAULT NULL,
  `nombre` char(25) DEFAULT NULL,
  `apellido` char(25) DEFAULT NULL,
  `foto` varchar(75) DEFAULT NULL,
  `rol` char(25) DEFAULT NULL,
  `clave_admin` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
);