const User = require('../models/User');

module.exports = {
    async add(req, res) {
        const {name, password} = req.body;

        const user = await User.create({
            name, 
            password
        })

        return res.json(user);
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