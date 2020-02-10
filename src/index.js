const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes.js');
require('dotenv/config');

const app = express();

async function connect() {
    await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(function() {
            console.log('DB Connection: OK');
        })
        .catch(function() {
            console.log('DB Connection: Failed');
        });
}

connect();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3030, function() {
    console.log('listening on port 3030');
});