const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body; //desestruturação de um objeto

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email }); //criando o email de login no banco
    }
    return res.json(user); //retorna o email do usuario que foi cadastrado
  }
};
