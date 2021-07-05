const Database = require('../db/config');
const bcrypt = require('bcrypt');

module.exports = {
  async index(req, res) {
    const db = await Database();

    const roomId = req.params.room;
    const questiomId = req.params.question;
    const action = req.params.action;
    const email = req.body.email;
    const password = req.body.password;

    /* Verificar senha passada pelo modal */
    const verifyisRoom = await db.get(
      `SELECT * FROM rooms where id = ${roomId}`
    );

    if (
      verifyisRoom.email == email &&
      bcrypt.compareSync(password, verifyisRoom.pass)
    ) {
      if (action == 'delete') {
        await db.run(`DELETE FROM questions WHERE id = ${questiomId}`);
      } else if (action == 'check') {
        await db.run(`UPDATE questions SET read = 1 WHERE id = ${questiomId}`);
      }
      res.redirect(`/room/${roomId}`);
    } else {
      res.render('parts/passincorrect', { roomId: roomId });
    }

    console.log(roomId);
    console.log(questiomId);
    console.log(action);
    console.log(email);
    console.log(criptPass(password));
  },

  async create(req, res) {
    const db = await Database();

    const question = req.body.question;
    const roomId = req.params.room;

    await db.run(
      `INSERT INTO questions(title, room, read) VALUES ('${question}',${roomId},0)`
    );

    res.redirect(`/room/${roomId}`);
  },
};

//criptografa a senha
function criptPass(pass) {
  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(pass, salt);
  return hashPass;
}
