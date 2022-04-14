CREATE DATABASE Ecoffee;
USE Ecoffee;

CREATE TABLE Empresa(
idEmpresa INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nomeEmpresa VARCHAR(45),
CNPJ CHAR(18),
Contato CHAR(14),
email VARCHAR(40),
senha VARCHAR(40),
data_inicio DATE,
CEP_Empresa CHAR(9),
Numero_endereco INT
);

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
NomeUsuario VARCHAR(45),
funcao CHAR(3),
CHECK (funcao = 'fun' or 'adm'),
fk_Empresa INT,
FOREIGN KEY (fk_Empresa) REFERENCES Empresa (idEmpresa)
);

CREATE TABLE Unidade(
idUnidade INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nomeUnidade VARCHAR(45),
fk_Empresa INT,
FOREIGN KEY (fk_Empresa) REFERENCES Empresa (idEmpresa),
fk_responsavel INT,
FOREIGN KEY (fk_responsavel) REFERENCES Usuario (idUsuario),
CEP_Unidade CHAR(9),
Numero_endereco INT
);

CREATE TABLE setor_unidade(
idSetor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome_area VARCHAR(8),
qtd_sensores INT,
fk_tipoGrao INT,
FOREIGN KEY (fk_tipoGrao) REFERENCES tipo_grao (id_grao),
fk_unidade INT,
FOREIGN KEY (fk_unidade) REFERENCES Unidade (fk_Empresa)
);

CREATE TABLE tipo_grao(
idGrao INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome_grao VARCHAR(45),
temperatura_max INT,
temperatura_min INT,
umidade_min INT,
umidade INT
);

CREATE TABLE Monitoramento(
idMonitoramento INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
numero_sensor VARCHAR(8),
dataHora DATETIME,
temp_celsius INT,
umidade_porc INT,
fk_setor_tipoGrao INT,
FOREIGN KEY (fk_setor_tipoGrao) REFERENCES setor_unidade (fk_tipoGrao),
fk_setor_unidade INT,
FOREIGN KEY (fk_setor_unidade) REFERENCES setor_unidade (fk_unidade)
);