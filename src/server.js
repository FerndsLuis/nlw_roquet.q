const express = require('express');
const route = require('./routes'); //importa as rotas
const path = require('path');

const server = express();

server.set('view engine', 'EJS'); //configura EJS

server.use(express.static('public')); //definindo o diretório /public de forma estática

server.set('views', path.join(__dirname, 'views')); //indica o diretório da pasta VIEWS ||  __dirname = SRC/, views

server.use(express.urlencoded({ extended: true })); //permite pegar o conteúdo do form e decofificar. Intermédio entre a rota e o controller

server.use(route); //indica qual arquivo

server.listen(3000, () => console.log('Rodando'));
