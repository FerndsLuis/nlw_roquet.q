const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

//Liberar acesso as páginas - Rotas
route.get('/', (req, res) => res.render('index', { page: 'enter-room' })); //Passando uma váriável como resposta
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
); //Passando uma váriável como resposta

route.get('/room/:room', (req, res) => res.render('room'));
//Liberar acesso as páginas - Rotas

//Formato que o formulario de dentro da modal precisa passar -- ENVIANDO PARA O CONTROLLER CONTROLLERS/QUESTIONCONTROLLER.JS
route.post('/question/:room/:question/:action', QuestionController.index); //id da sala - Id da questão - ação
route.post('/create-room', RoomController.create); //passa senha pelo body

module.exports = route;
