const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async add(req, res) {
        const {name, password} = req.body;
        let msg;

        if(password.length >= 6) {
            if(await User.findOne({name}) == null) {
                bcrypt.hash(password, 10, function(err, hash) {
                    const user = User.create({
                        name: name, 
                        password: hash
                    })
            
                    msg= 'Usuário cadastrado';
                });
            } else {
                msg= 'Nome de usuário já existente';
            }
        } else {
            msg= 'Senha muito curta';
        }
        
        return res.json({msg});
    },

    async list(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async delete(req, res) {
        const { name } = req.params.name;

        const user = await User.findOneAndDelete(name);

        let msg;
        if(user == null) {
            msg = "Id inválido";
        } else {
            msg = "Usuário removido";
        }

        return res.json({ msg });
    }
};