create database skereee;
use skereee;
CREATE TABLE `categorias` (
  `id_categorias` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_padre` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_categorias`),
  KEY `categoria-categoria_idx` (`categoria_padre`),
  KEY `categorias-categorias_idx` (`categoria_padre`),
  CONSTRAINT `categoria-categoria` FOREIGN KEY (`categoria_padre`) REFERENCES `categorias` (`id_categorias`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `categorias-categorias` FOREIGN KEY (`categoria_padre`) REFERENCES `categorias` (`id_categorias`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `usuario` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `posteos` (
  `idposteos` int(11) NOT NULL,
  `texto` longtext,
  `archivo` varchar(45) DEFAULT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`idposteos`),
  KEY `posteo-categoria_idx` (`categoria`),
  KEY `posteo-usuario_idx` (`usuario`),
  CONSTRAINT `posteo-categoria` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`id_categorias`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `posteo-usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  PRIMARY KEY (`idcomentarios`),
  KEY `comentario-comentario_idx` (`comentarioPadre`),
  KEY `comentario-posteo_idx` (`posteo`),
  KEY `comentario-usuario_idx` (`usuario`),
  CONSTRAINT `comentario-comentario` FOREIGN KEY (`comentarioPadre`) REFERENCES `comentarios` (`idcomentarios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `comentario-posteo` FOREIGN KEY (`posteo`) REFERENCES `posteos` (`idposteos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `comentario-usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;