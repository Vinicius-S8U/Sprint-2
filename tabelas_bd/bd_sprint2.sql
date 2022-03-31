drop database e_coffe;
create database e_coffee;
use e_coffee;

create table Usuario(idUsuario int primary key auto_increment,
 nome_empresa varchar(45),
 CNPJ char (18),
 contato char (11),
 email varchar (40),
 senha varchar (40),
 data_inicio datetime default current_timestamp,
 cep char(9)
 );
 
 create table  Grao (idGrao int primary key auto_increment,
 Tipo_Grao varchar (15), 
 temp_min float,
 temp_max float,
 umidade_min float,
 umidade_max float
 ) auto_increment = 1000;
 
 
create table sensor (idSensor int primary key auto_increment, 
 Data_Hora datetime default current_timestamp,
 temp_celsius float,
 umidade float,
 fk_Usuario int,
 foreign key (fk_Usuario) references Usuario (idUsuario),
 fk_grao int,
 foreign key (fk_grao) references Grao (idGrao)
 ) auto_increment = 2000;
 
 
 select *from sensor left join Usuario on fk_usuario inner join Grao on fk_grao = idGrao;


