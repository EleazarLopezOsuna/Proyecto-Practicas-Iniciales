﻿/*
Created: 10/19/2020
Modified: 10/19/2020
Model: MySQL 8.0
Database: MySQL 8.0
*/

-- Create tables section -------------------------------------------------

-- Table Usuarios

CREATE TABLE `Usuarios`
(
  `Carnet` Int NOT NULL,
  `Nombres` Varchar(45) NOT NULL,
  `Apellidos` Varchar(45) NOT NULL,
  `Password` Varchar(45) NOT NULL,
  `Correo` Varchar(45) NOT NULL
)
;

ALTER TABLE `Usuarios` ADD PRIMARY KEY (`Carnet`)
;

-- Table CursosAprobados

CREATE TABLE `CursosAprobados`
(
  `CodigoCurso` Int NOT NULL,
  `Carnet` Int NOT NULL,
  `Nota` Int NOT NULL
)
;

CREATE INDEX `IX_Relationship1` ON `CursosAprobados` (`Carnet`)
;

ALTER TABLE `CursosAprobados` ADD PRIMARY KEY (`CodigoCurso`)
;

-- Table Comentarios

CREATE TABLE `Comentarios`
(
  `IdComentario` Int NOT NULL,
  `IdPublicacion` Int NOT NULL,
  `Carnet` Int NOT NULL,
  `Mensaje` Varchar(256) NOT NULL
)
;

CREATE INDEX `IX_Relationship3` ON `Comentarios` (`Carnet`)
;

CREATE INDEX `IX_Relationship5` ON `Comentarios` (`IdPublicacion`)
;

ALTER TABLE `Comentarios` ADD PRIMARY KEY (`IdComentario`)
;

-- Table Publicaciones

CREATE TABLE `Publicaciones`
(
  `IdPublicacion` Int NOT NULL,
  `Carnet` Int NOT NULL,
  `CodigoCurso` Int,
  `IdCatedratico` Int,
  `IdSeccion` Varchar(20),
  `Mensaje` Varchar(256) NOT NULL,
  `Fecha` Date NOT NULL,
  `Tipo` Int NOT NULL
)
;

CREATE INDEX `IX_Relationship4` ON `Publicaciones` (`Carnet`)
;

CREATE INDEX `IX_Relationship9` ON `Publicaciones` (`IdSeccion`)
;

CREATE INDEX `IX_Relationship16` ON `Publicaciones` (`IdCatedratico`)
;

CREATE INDEX `IX_Relationship17` ON `Publicaciones` (`CodigoCurso`)
;

ALTER TABLE `Publicaciones` ADD PRIMARY KEY (`IdPublicacion`)
;

-- Table Cursos

CREATE TABLE `Cursos`
(
  `CodigoCurso` Int NOT NULL,
  `Nombre` Varchar(45) NOT NULL
)
;

ALTER TABLE `Cursos` ADD PRIMARY KEY (`CodigoCurso`)
;

-- Table Catedraticos

CREATE TABLE `Catedraticos`
(
  `IdCatedratico` Int NOT NULL AUTO_INCREMENT,
  `Nombres` Varchar(45) NOT NULL,
  `Apellidos` Varchar(45) NOT NULL,
  PRIMARY KEY (`IdCatedratico`)
)
;

-- Table Secciones

CREATE TABLE `Secciones`
(
  `IdSeccion` Varchar(20) NOT NULL,
  `CodigoCurso` Int NOT NULL,
  `IdCatedratico` Int NOT NULL,
  `Seccion` Varchar(2) NOT NULL
)
;

CREATE INDEX `IX_Relationship7` ON `Secciones` (`IdCatedratico`)
;

CREATE INDEX `IX_Relationship8` ON `Secciones` (`CodigoCurso`)
;

ALTER TABLE `Secciones` ADD PRIMARY KEY (`IdSeccion`)
;

-- Table Pensums

CREATE TABLE `Pensums`
(
  `IdCarrera` Int NOT NULL,
  `CodigoCurso` Int NOT NULL,
  `Creditos` Int NOT NULL,
  `Semestre` Int NOT NULL
)
;

CREATE INDEX `IX_Relationship11` ON `Pensums` (`CodigoCurso`)
;

ALTER TABLE `Pensums` ADD PRIMARY KEY (`IdCarrera`)
;

-- Table Carreras

CREATE TABLE `Carreras`
(
  `IdCarrera` Int NOT NULL,
  `Nombre` Varchar(45) NOT NULL
)
;

ALTER TABLE `Carreras` ADD PRIMARY KEY (`IdCarrera`)
;

-- Create foreign keys (relationships) section -------------------------------------------------

ALTER TABLE `CursosAprobados` ADD CONSTRAINT `Relationship1` FOREIGN KEY (`Carnet`) REFERENCES `Usuarios` (`Carnet`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Comentarios` ADD CONSTRAINT `Relationship3` FOREIGN KEY (`Carnet`) REFERENCES `Usuarios` (`Carnet`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Publicaciones` ADD CONSTRAINT `Relationship4` FOREIGN KEY (`Carnet`) REFERENCES `Usuarios` (`Carnet`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Comentarios` ADD CONSTRAINT `Relationship5` FOREIGN KEY (`IdPublicacion`) REFERENCES `Publicaciones` (`IdPublicacion`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Secciones` ADD CONSTRAINT `Relationship7` FOREIGN KEY (`IdCatedratico`) REFERENCES `Catedraticos` (`IdCatedratico`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Secciones` ADD CONSTRAINT `Relationship8` FOREIGN KEY (`CodigoCurso`) REFERENCES `Cursos` (`CodigoCurso`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Publicaciones` ADD CONSTRAINT `Relationship9` FOREIGN KEY (`IdSeccion`) REFERENCES `Secciones` (`IdSeccion`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Pensums` ADD CONSTRAINT `Relationship11` FOREIGN KEY (`CodigoCurso`) REFERENCES `Cursos` (`CodigoCurso`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Publicaciones` ADD CONSTRAINT `Relationship16` FOREIGN KEY (`IdCatedratico`) REFERENCES `Catedraticos` (`IdCatedratico`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Publicaciones` ADD CONSTRAINT `Relationship17` FOREIGN KEY (`CodigoCurso`) REFERENCES `Cursos` (`CodigoCurso`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `CursosAprobados` ADD CONSTRAINT `Relationship18` FOREIGN KEY (`CodigoCurso`) REFERENCES `Cursos` (`CodigoCurso`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Pensums` ADD CONSTRAINT `Relationship19` FOREIGN KEY (`IdCarrera`) REFERENCES `Carreras` (`IdCarrera`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


