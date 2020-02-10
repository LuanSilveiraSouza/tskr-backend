const mongoose = require('mongoose');
const increment = require('mongoose-auto-increment');
require('dotenv/config');

const connection = mongoose.createConnection(process.env.DB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true});

increment.initialize(connection);

const UserSchema = mongoose.Schema({
    name: String,
    password: String
});

UserSchema.plugin(increment.plugin, {
    model: 'User',
    startAt: 10,
})

module.exports = mongoose.model('User', UserSchema);
