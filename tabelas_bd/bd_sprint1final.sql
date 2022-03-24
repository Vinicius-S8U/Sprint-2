create database e_coffee;
use e_coffee;

create table usuario (
		idEmpresa int primary key auto_increment,
        nome varchar(100),
        email varchar(100),
        senha varchar(20),
        cnpj char (18),
        telefone char(11),
        cep char (8),
        endereco_numero varchar (10),
        tipo_grao varchar (20));
        
        
        
create table monitoramento (
		idMonitoramento int primary key auto_increment,
		temperatura_em_celsius varchar(4),
        porcentagem_umidade  varchar (4),
        dataHora datetime,
        idEmpresa  varchar (2));
        
create table Grão (idGrão int primary key auto_increment, 
Tipo_Grão varchar (15),
 Temperatura_ideal varchar (12), 
 Umidade_ideal varchar (12));

create table  Localização (idLocalização int primary key auto_increment,
 idUsuario char (3),
 nome varchar (100), 
 CNPJ varchar (100),
 contratação date, 
 sede varchar (300), 
 RazãoSocial varchar (30));




insert into Localização ( idUsuario , nome , CNPJ,  contratação , sede , RazãoSocial )
values ("1", 'Três corações', 62000278/0013-50, '2021-08-08', 'Av. Dr. Chucri Zaidan, 250 - Vila Cordeiro, São Paulo - SP, 04583-110', 'Melitta South America'),
 ("2", 'Pilão', 60409075/0118-63, '2022-01-08', 'Av. Dr. Chucri Zaidan, 246, 8º Andar – Vila Cordeiro / São Paulo-SP, 04583-110', 'Nestlé Brasil'),
 ("3", 'Café Pelé', 04157755/0001-20, '2019-06-02', 'Av. Fernando Cerqueira César Coimbra, 100 - Jardim Santa Cecilia, Barueri - SP, 06465-090', 'S.FILKA & CIA. LTDA'),
 ("4", 'Starbucks', 07584456/0001-95, '2018-04-02', 'R. Porto Alegre, 62 - Jd. Novo Cândida, Araras - SP, 13603-121', 'BAGGIO COFFEES EXPORTACAO LTDA'),
 ("5", 'Tiradentes', 64968613/0001-08, '2022-01-18', 'Av. Henry Ford, 1059 - Parque da Mooca, São Paulo - SP, 03109-000', 'MEGABRAYN DO BRASIL LTDA');

        
        
insert into usuario (  nome, email, senha, cnpj, telefone, cep, endereco_numero, tipo_grao )
values ("Três corações", "trescoraçoes@hotmail.com", "101010", "63.310.411/0001-01","11216987921", "08240090", "47", "Arabico"  ),
	   ("Pilão", "pilao@gmail.com", "123123", "01.262.217/0001-01","21964525062", "08050080", "1985","Robusto" ),
        ("Café Pelé", "cafepele@gmail.com", "1235455", "01.233.214/0001-02","21964524017", "09500900", "85","Arabico" ),
         ( "Starbucks","starbucks@gmail.com", "252525", "04.262.256/0003-01","21964586362", "08250090", "15","Robusto" ),
         ( "Tiradentes","tiradentes@gmail.com", "g85695", "14.572.256/0005-01","21632146362", "01005095", "108","Arabica" );
        
       

insert into Grão (Tipo_Grão, Temperatura_ideal, Umidade_ideal) values ("Arabico", "18°C e 23°C","11% a 12%"),
																		("Robusto", "18°C e 24°C","12% a 15%"),
                                                                        ("Bourbon", "17°C e 21°C","10% a 11%");
       

insert into monitoramento (temperatura_em_celsius, porcentagem_umidade, dataHora, idEmpresa) values ( '25', '38', '2022-03-11 15:01:39', '1'),
								( '21', '42', '2022-03-11 19:13:39', '2'),
                                ( '13', '24', '2022-03-11 08:45:15', '3'),
                                ( '33', '30', '2022-03-11 10:45:01', '4'),
                                ('24', '31', '2022-03-11 16:39:01', '5');

select * from monitoramento;
select * from usuario;
drop table usuario ;
update monitorimento set idEmpresa = "6" where idMonitoramento = "1";





 
 
 
 