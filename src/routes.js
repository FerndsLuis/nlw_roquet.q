const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

//Liberar acesso as páginas - Rotas
route.get('/', (req, res) => res.render('index', { page: 'enter-room' })); //Passando uma váriável como resposta
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
); //Passando uma váriável como resposta

//cria a sala
route.post('/create-room', RoomController.create); //passa senha pelo body
//Carre a questões da sala pelo ID da sala
route.get('/room/:room', RoomController.open); //passa o id da sala pelo corpo
//Acessa a sala através da Home
route.post('/enterroom', RoomController.enter);

//cria uma pergunta passando id da sala
route.post('/question/create/:room', QuestionController.create);
//Formato que o formulario de dentro da modal precisa passar -- ENVIANDO PARA O CONTROLLER CONTROLLERS/QUESTIONCONTROLLER.JS
route.post('/question/:room/:question/:action', QuestionController.index); //id da sala - Id da questão - ação

module.exports = route;
