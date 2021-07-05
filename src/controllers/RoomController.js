const Database = require('../db/config');

module.exports = {
  async create(req, res) {
    const db = await Database();
    const email = req.body.email.toLowerCase();
    const pass = req.body.password;
    let roomId;
    let isRoom = true;
    let isEmail = false;
    let isPass = false;

    //valida email via regex
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    isEmail = emailRegexp.test(email);

    //valida a senha
    isPass = pass.length > 3 ? true : false;

    while (isRoom) {
      /* Gera o número da sala */
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString());
      }

      /* Verificar se o número da sala já existe */
      const roomsExistIds = await db.all('SELECT id FROM rooms');

      isRoom = roomsExistIds.some((roomExistId) => roomExistId === roomId);

      if (!isRoom && isEmail && isPass) {
        /*Inseri a Sala no Banco com a senha*/
        await db.run(
          `INSERT INTO rooms (id, email, pass) VALUES 
          (${parseInt(roomId)},'${email}','${pass}');`
        );
        await db.close();
        res.redirect(`/room/${roomId}`);
      } else {
        await db.close();
        res.redirect(`/create-pass?error`);
      }
    }
  },

  async open(req, res) {
    const db = await Database();
    const roomId = req.params.room;

    const questions = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} AND read = 0`
    );

    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} AND read = 1`
    );

    let isNoQuestions;

    if (questions.length == 0) {
      if (questionsRead.length == 0) {
        isNoQuestions = true;
      }
    }

    res.render('room', {
      roomId: roomId,
      questions: questions,
      questionsRead: questionsRead,
      isNoQuestions: isNoQuestions,
    });
  },

  enter(req, res) {
    const roomId = req.body.roomId;
    res.redirect(`/room/${roomId}`);
  },
};
