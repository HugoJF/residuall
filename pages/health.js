const app = require('../index');

app.get('/', function (req, res) {
    res.send(ok());
});

app.get('/health', function (req, res) {
    res.send(ok([{
        message: 'Servidor executando na porta 8080'
    }]));
});
