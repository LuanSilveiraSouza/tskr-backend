const express = require('express');

const app = express();
app.use(express.json());

app.get('/', function(res, res) {
    res.send('Hello World!!!');
})

app.listen(3050, function() {
    console.log('listening on port 3050');
});