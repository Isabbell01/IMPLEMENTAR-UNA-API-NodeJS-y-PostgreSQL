create database firstapi;

create table users (
    id integer primary key,
    name varchar(20) not null,
    email text not null,
);

insert into users (name, email) values ('pablo', 'pablo@gmail');




