const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log('Escuchando puerto' + PORT);
});
