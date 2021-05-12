const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json());

function ok(results = []) {
    return {
        status: 'OK',
        code: 200,
        results
    }
}

function isValidEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }

    // [1 ou mais caracteres] @ [1 ou mais caracteres] [1 das 4 opções] [fim da string]
    return email.match(/.+@.+(.com.br|.com|.gov.br|.org)$/) !== null;
}

async function eva(email) {
    const request = await axios.get('https://api.eva.pingutil.com/email', {
        params: {email}
    });

    return request.data.data;
}

app.get('/', function (req, res) {
    res.send(ok());
});

app.get('/health', function (req, res) {
    res.send(ok([{
        message: 'Servidor executando na porta 8080'
    }]));
});

app.post('/mail/validation/v1', function (req, res) {
    let emails = req.body.email_address;

    if (!Array.isArray(emails)) {
        emails = [emails];
    }

    res.send(ok(
        emails.map(email => ({
            'email_address': email,
            'domain': 'mail',
            'valid_syntax': isValidEmail(email),
        }))
    ));
});

app.post('/mail/validation/v3', async function (req, res) {
    let emails = req.body.email_address;

    if (!Array.isArray(emails)) {
        emails = [emails];
    }

    const requests = emails.map(eva);

    res.send(ok(
        await Promise.all(requests)
    ));
});

app.listen(8080);
