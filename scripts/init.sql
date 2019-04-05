create database sauce_meme;

\c sauce_meme



create table usuario ( 
    id serial not null,
    nome varchar(60) not null,
    email varchar(100) not null UNIQUE,
    sexo varchar(20) null,
    nascimento date nu ll,
    pais varchar(40) null,
    estado varchar(40) null,
    password varchar(60) null,
    created_at timestamp not null default current_timestamp
 )