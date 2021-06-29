module.exports = {
  index(req, res) {
    const roomId = req.params.room;
    const questiomId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;

    console.log(roomId);
    console.log(questiomId);
    console.log(action);
    console.log(password);
  },
};
