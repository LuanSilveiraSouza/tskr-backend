const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(cors());

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

app.get('/', function(res, res) {
    res.send('Hello World!!!');
})

app.listen(3050, function() {
    console.log('listening on port 3050');
});