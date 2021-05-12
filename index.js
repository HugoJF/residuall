const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send({
        status: "OK",
        code: 200,
        results: []
    });
});

app.get('/health', function (req, res) {
    res.send({
        status: "OK",
        code: 200,
        results: [{
            message: "Servidor executando na porta 8080"
        }]
    });
});

app.listen(8080);
