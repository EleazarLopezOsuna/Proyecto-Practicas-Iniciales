-- Create database section -----------------------------------------------
CREATE DATABASE proyecto_practicas_iniciales_db;
USE proyecto_practicas_iniciales_db;

-- Create tables section -------------------------------------------------

-- Table Usuarios

CREATE TABLE Usuarios
(
  Carnet Int NOT NULL,
  Nombres Varchar(64) NOT NULL,
  Apellidos Varchar(64) NOT NULL,
  Password Varchar(64) NOT NULL,
  Correo Varchar(64) NOT NULL
)
;

ALTER TABLE Usuarios ADD PRIMARY KEY (Carnet)
;

-- Table CursosAprobados

CREATE TABLE CursosAprobados
(
  CodigoCurso Int NOT NULL,
  Carnet Int NOT NULL,
  Nota Int NOT NULL
)
;

CREATE INDEX IX_Relationship1 ON CursosAprobados (Carnet)
;

ALTER TABLE CursosAprobados ADD PRIMARY KEY (CodigoCurso)
;

-- Table Comentarios

CREATE TABLE Comentarios
(
  IdComentario Int NOT NULL AUTO_INCREMENT,
  IdPublicacion Int NOT NULL,
  Carnet Int NOT NULL,
  Mensaje Varchar(256) NOT NULL,
  PRIMARY KEY (IdComentario)
)
;

CREATE INDEX IX_Relationship3 ON Comentarios (Carnet)
;

CREATE INDEX IX_Relationship5 ON Comentarios (IdPublicacion)
;

-- Table Publicaciones

CREATE TABLE Publicaciones
(
  IdPublicacion Int NOT NULL AUTO_INCREMENT,
  Carnet Int NOT NULL,
  CodigoCurso Int,
  IdCatedratico Int,
  IdSeccion Varchar(20),
  Mensaje Varchar(256) NOT NULL,
  Fecha Date NOT NULL,
  Tipo Int NOT NULL,
  PRIMARY KEY (IdPublicacion)
)
;

CREATE INDEX IX_Relationship4 ON Publicaciones (Carnet)
;

CREATE INDEX IX_Relationship9 ON Publicaciones (IdSeccion)
;

CREATE INDEX IX_Relationship16 ON Publicaciones (IdCatedratico)
;

CREATE INDEX IX_Relationship17 ON Publicaciones (CodigoCurso)
;

-- Table Cursos

CREATE TABLE Cursos
(
  CodigoCurso Int NOT NULL,
  Nombre Varchar(64) NOT NULL
)
;

ALTER TABLE Cursos ADD PRIMARY KEY (CodigoCurso)
;

-- Table Catedraticos

CREATE TABLE Catedraticos
(
  IdCatedratico Int NOT NULL AUTO_INCREMENT,
  Nombres Varchar(64) NOT NULL,
  Apellidos Varchar(64) NOT NULL,
  PRIMARY KEY (IdCatedratico)
)
;

-- Table Secciones

CREATE TABLE Secciones
(
  IdSeccion Varchar(20) NOT NULL,
  CodigoCurso Int NOT NULL,
  IdCatedratico Int NOT NULL,
  Seccion Varchar(2) NOT NULL
)
;

CREATE INDEX IX_Relationship7 ON Secciones (IdCatedratico)
;

CREATE INDEX IX_Relationship8 ON Secciones (CodigoCurso)
;

ALTER TABLE Secciones ADD PRIMARY KEY (IdSeccion)
;

-- Table Pensums

CREATE TABLE Pensums
(
  IdCarrera Int NOT NULL,
  CodigoCurso Int NOT NULL,
  Creditos Int NOT NULL,
  Semestre Int NOT NULL
)
;

CREATE INDEX IX_Relationship11 ON Pensums (CodigoCurso)
;

-- Table Carreras

CREATE TABLE Carreras
(
  IdCarrera Int NOT NULL,
  Nombre Varchar(64) NOT NULL
)
;

ALTER TABLE Carreras ADD PRIMARY KEY (IdCarrera)
;

-- Create foreign keys (relationships) section -------------------------------------------------

ALTER TABLE CursosAprobados ADD CONSTRAINT Relationship1 FOREIGN KEY (Carnet) REFERENCES Usuarios (Carnet)
;

ALTER TABLE Comentarios ADD CONSTRAINT Relationship3 FOREIGN KEY (Carnet) REFERENCES Usuarios (Carnet) 
;

ALTER TABLE Publicaciones ADD CONSTRAINT Relationship4 FOREIGN KEY (Carnet) REFERENCES Usuarios (Carnet) 
;

ALTER TABLE Comentarios ADD CONSTRAINT Relationship5 FOREIGN KEY (IdPublicacion) REFERENCES Publicaciones (IdPublicacion) 
;

ALTER TABLE Secciones ADD CONSTRAINT Relationship7 FOREIGN KEY (IdCatedratico) REFERENCES Catedraticos (IdCatedratico) 
;

ALTER TABLE Secciones ADD CONSTRAINT Relationship8 FOREIGN KEY (CodigoCurso) REFERENCES Cursos (CodigoCurso) 
;

ALTER TABLE Publicaciones ADD CONSTRAINT Relationship9 FOREIGN KEY (IdSeccion) REFERENCES Secciones (IdSeccion) 
;

ALTER TABLE Pensums ADD CONSTRAINT Relationship11 FOREIGN KEY (CodigoCurso) REFERENCES Cursos (CodigoCurso) 
;

ALTER TABLE Publicaciones ADD CONSTRAINT Relationship16 FOREIGN KEY (IdCatedratico) REFERENCES Catedraticos (IdCatedratico) 
;

ALTER TABLE Publicaciones ADD CONSTRAINT Relationship17 FOREIGN KEY (CodigoCurso) REFERENCES Cursos (CodigoCurso) 
;

ALTER TABLE CursosAprobados ADD CONSTRAINT Relationship18 FOREIGN KEY (CodigoCurso) REFERENCES Cursos (CodigoCurso) 
;

ALTER TABLE Pensums ADD CONSTRAINT Relationship19 FOREIGN KEY (IdCarrera) REFERENCES Carreras (IdCarrera) 
;


INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (17, "Social Humanistica 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (101, "Matematica Basica 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (69, "Tecnica Complementaria 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (39, "Deportes 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (348, "Quimica General 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (6, "Idioma Tecnico 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (19, "Social Humanistica 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (103, "Matematica Basica 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (5, "Tecnicas de Estudio y de Investigacion");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (147, "Fisica Basica");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (40, "Deportes 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (8, "Idioma Tecnico 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (795, "Logica de Sistemas");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (960, "Matematica de Computo 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (770, "Introduccion a la Programacion 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (107, "Matematica Intermedia 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (150, "Fisica 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (9, "Idioma Tecnico 3");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (732, "Estadistica 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (796, "Lenguajes Formales y de Programacion");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (962, "Matematica de Computo 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (771, "Introduccion a la Programacion 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (10, "Logica");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (112, "Matematica Intermedia 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (114, "Matematica Intermedia 3");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (152, "Fisica 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (11, "Idioma Tecnico 4");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (2025, "Practica Inicial");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (736, "Analisis Probabilistico");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (777, "Organizacion de Lenguajes y Compiladores 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (964, "Organizacion Computacional");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (772, "Estructura de Datos");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (18, "Filosofia de la Ciencia");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (116, "Matematica Aplicada 3");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (118, "Matematica Aplicada 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (368, "Principios de Metrologia");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (650, "Contabilidad 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (28, "Ecologia");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (722, "Teoria de Sistemas 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (601, "Investigacion de Operaciones 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (14, "Economia");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (781, "Organizacion de Lenguajes y Compiladores 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (778, "Arquitectura de Computadoras y Ensambladores 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (773, "Manejo e Implementacion de Archivos");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (122, "Matematica Aplicada 4");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (120, "Matematica Aplicada 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (200, "Ingenieria Electrica 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (652, "Contabilidad 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (335, "Gestion de Desastres");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (724, "Teoria de Sistemas 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (603, "Investigacion de Operaciones 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (734, "Estadistica 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (271, "Sistemas Operativos 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (779, "Arquitectura de Computadoras y Ensambladores 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (970, "Redes de Computadoras 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (774, "Sistemas de Bases de Datos 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (656, "Administracion de Empresas 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (654, "Contabilidad 3");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (2036, "Practica Intermedia");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (285, "Sistemas Operativos 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (975, "Redes de Computadoras 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (775, "Sistemas de Bases de Datos 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (283, "Analisis y Diseño de Sistemas 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (797, "Seminario de Sistemas 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (700, "Ingenieria Economica 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (729, "Modelacion y Simulacion 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (786, "Sistemas Organizacionales y Gerenciales 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (972, "Inteligencia Artificial 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (966, "Seguridad y Auditorias de Redes");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (785, "Analisis y Diseño de Sistemas 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (788, "Sistemas Aplicados 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (738, "Bases de Datos Avanzadas");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (798, "Seminario de Sistemas 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (288, "Introduccion a la Evaluacion de Impacto Ambiental");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (702, "Ingenieria Economica 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (1, "Etica Profesional");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (2009, "Practica Final");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (787, "Sistemas Organizacionales y Gerenciales 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (790, "Emprendedores de Negocios Informaticos");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (720, "Modelacion y Simulacion 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (968, "Inteligencia Artificial 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (974, "Redes de Nueva Generacion");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (780, "Software Avanzado");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (789, "Sistemas Aplicados 2");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (735, "Auditoria de Proyectos de Software");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (7990, "Seminario de Investigacion EPS");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (710, "Planeamiento");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (706, "Preparacion y Evaluacion de Proyectos 1");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (799, "Seminario de Investigacion");
INSERT INTO Cursos (CodigoCurso, Nombre) VALUES (281, "Sistemas Operativos");


INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("JOSE RICARDO", "MORALES PRADO");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("WILLIAM SAMUEL", "GUEVARA ORELLANA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("MIRNA IVONNE", "ALDANA LARRAZABAL");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("OTTO RENE", "ESCOBAR LEIVA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("GABRIEL ALEJANDRO", "DIAS LOPEZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("OTTO AMILCAR", "RODRIGUEZ ACOSTA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("LUIS FERNANDO", "ESPINO BARRIOS");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("ALVARO GIOVANNI", "LONGO MORALES");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("LUIS ALBERTO", "ARIAS");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("ILEANA GUISELA", "RALDA RECINOS DE ILLESCAS");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("EVELYN CAROLINA", "MORALES RUIZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("LUDWING FEDERICO", "ALTAN SAC");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("JESÚS ALBERTO", "GUZMÁN");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("ALVARO OBRAYAN", "HERNANDEZ GARCIA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("LUIS ALBERTO", "VETTORAZZI ESPANA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("MARIO JOSE", "BAUTISTA FUENTES");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("MARLON FRANCISCO", "ORELLANA LOPEZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("BYRON RODOLFO", "ZEPEDA AREVALO");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("MOISES EDUARDO", "VELASQUEZ OLIVA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("HERMAN IGOR", "VELIZ LINARES");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("NEFTALI DE JESUS", "CALDERON MENDEZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("MARLON ANTONIO", "PEREZ TURK");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("CLAUDIA LICETH", "ROJAS MORALES");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("JOSE MANUEL", "RUIZ JUAREZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("WILLIAM ESTUARDO", "ESCOBAR ARGUETA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("EDWIN ESTUARDO", "ZAPETA GOMEZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("DAVID ESTUARDO", "MORALES");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("VIRGINIA VICTORIA", "TALA AYERDI");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("FLORIZA FELIPA", "AVILA PESQUERA DE MEDINILLA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("JUAN ALVARO", "DIAZ ARDAVIN");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("OSCAR ALEJANDRO", "PAZ CAMPOS");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("MIGUEL ANGEL", "CANCINOS RENDON");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("CESAR AUGUSTO", "FERNANDEZ CACERES");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("BAYRON WOSVELY", "LOPEZ LOPEZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("EDGAR RUBEN", "SABAN RAXON");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("ERICK CARLOS ROBERTO", "NAVARRO DELGADO");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("MANUEL HAROLDO", "CASTILLO REYNA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("KEVIN ABDIEL", "LAJPOP AJPACAJA");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("GUIPPSY JEANNIRA", "MENENDEZ PEREZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("JOSE ANIBAL", "SILVA DE LOS ANGELES");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("PEDRO PABLO", "HERNANDEZ RAMIREZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("MANUEL FERNANDO", "LOPEZ FERNANDEZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("SERGIO ARNALDO", "MENDEZ AGUILAR");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("CESAR ROLANDO", "BATZ SAQUIMUX");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("EVEREST DARWIN", "MEDINILLA RODRIGUEZ");
INSERT INTO Catedraticos (Nombres, Apellidos) VALUES ("JORGE LUIS", "ALVAREZ MEJIA");

INSERT INTO Carreras (IdCarrera, Nombre) VALUES (1, "Civil");
INSERT INTO Carreras (IdCarrera, Nombre) VALUES (2, "Quimica");
INSERT INTO Carreras (IdCarrera, Nombre) VALUES (3, "Industrial");
INSERT INTO Carreras (IdCarrera, Nombre) VALUES (4, "Electrica");
INSERT INTO Carreras (IdCarrera, Nombre) VALUES (5, "Mecanica");
INSERT INTO Carreras (IdCarrera, Nombre) VALUES (6, "Mecanica Electrica");
INSERT INTO Carreras (IdCarrera, Nombre) VALUES (7, "Mecanica Industrial");
INSERT INTO Carreras (IdCarrera, Nombre) VALUES (9, "Ciencias y Sistemas");
INSERT INTO Carreras (IdCarrera, Nombre) VALUES (13, "Electronica");
INSERT INTO Carreras (IdCarrera, Nombre) VALUES (35, "Ambiental");




INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 101, 7, 1);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 69, 3, 1);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 348, 3, 1);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 39, 1, 1);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 6, 2, 1);

INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 19, 4, 2);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 103, 7, 2);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 5, 3, 2);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 147, 5, 2);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 40, 2, 2);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 8, 2, 2);

INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 795, 2, 3);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 960, 5, 3);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 770, 4, 3);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 107, 10, 3);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 150, 6, 3);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 9, 2, 3);

INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 732, 5, 4);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 796, 3, 4);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 962, 5, 4);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 771, 5, 4);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 10, 2, 4);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 112, 5, 4);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 114, 5, 4);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 152, 6, 4);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 11, 2, 4);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 2025, 0, 3);

INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 736, 4, 5);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 777, 4, 5);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 964, 3, 5);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 772, 5, 5);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 18, 3, 5);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 116, 5, 5);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 118, 6, 5);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 368, 3, 5);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 650, 3, 5);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 28, 3, 5);

INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 722, 5, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 601, 5, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 14, 4, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 781, 5, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 778, 5, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 773, 4, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 122, 4, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 120, 6, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 200, 5, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 652, 3, 6);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 335, 3, 6);

INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 724, 5, 7);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 603, 5, 7);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 734, 5, 7);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 281, 5, 7);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 779, 4, 7);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 970, 4, 7);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 774, 5, 7);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 656, 5, 7);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 654, 3, 7);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 2036, 0, 7);

INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 285, 4, 8);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 975, 4, 8);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 775, 4, 8);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 283, 5, 8);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 787, 3, 8);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 700, 5, 8);

INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 729, 5, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 786, 4, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 972, 4, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 966, 4, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 785, 5, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 788, 5, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 738, 5, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 798, 3, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 288, 4, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 702, 4, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 1, 4, 9);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 2009, 0, 9);

INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 787, 4, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 790, 4, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 720, 5, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 968, 4, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 974, 4, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 780, 6, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 789, 5, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 735, 5, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 7990, 4, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 710, 6, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 706, 4, 10);
INSERT INTO Pensums (IdCarrera, CodigoCurso, Creditos, Semestre) VALUES (9, 799, 3, 10);



INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("283N", 283, 1, "N");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("785A", 785, 1, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("785A+", 785, 2, "A+");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("785A-", 785, 3, "A-");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("778A", 778, 4, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("778B", 778, 4, "B");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("779N", 778, 5, "N");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("774A", 774, 6, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("774B", 774, 7, "B");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("775A", 775, 8, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("775B", 775, 9, "B");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("14A", 14, 10, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("14P", 14, 11, "P");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("790A", 790, 12, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("772A", 772, 13, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("772B", 772, 14, "B");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("772C", 772, 7, "C");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("787A", 787, 15, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("787N", 787, 16, "N");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("972A", 972, 7, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("770A", 770, 17, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("770B", 770, 18, "B");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("770C", 770, 19, "C");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("770D", 770, 20, "D");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("770E", 770, 21, "E");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("771A", 771, 22, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("771B", 771, 23, "B");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("771C", 771, 24, "C");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("771D", 771, 25, "D");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("771E", 771, 26, "E");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("796A-", 796, 27, "A-");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("795A", 795, 28, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("795B", 795, 29, "B");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("773A+", 773, 30, "A+");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("773A-", 773, 31, "A-");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("729N", 729, 32, "N");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("720A", 720, 33, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("964A", 964, 4, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("964B", 964, 4, "B");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("781A", 781, 34, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("781B+", 781, 35, "B+");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("781B-", 781, 36, "B-");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("777A", 777, 16, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("777B", 777, 37, "B");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("777C", 777, 38, "C");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("2025C", 2025, 29, "C");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("2036C", 2036, 29, "C");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("970N", 970, 41, "N");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("975A", 975, 42, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("797A", 797, 42, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("798A", 798, 15, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("271A", 271, 43, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("285A", 285, 44, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("786N", 786, 26, "N");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("780A", 780, 45, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("722A", 722, 46, "A");
INSERT INTO Secciones (IdSeccion, CodigoCurso, IdCatedratico, Seccion) VALUES ("724A", 724, 45, "A");
