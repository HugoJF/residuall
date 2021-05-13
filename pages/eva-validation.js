const axios = require('axios');
const app = require('../index');
const {ok} = require("../utils");
const {EvaValidation} = require("./../models");

async function eva(email) {
    // Check if email is already validated
    const validation = await EvaValidation.findOne({
        where: {email_address: email},
        attributes: ['email_address', 'domain', 'valid_syntax'],
    });

    if (validation) {
        return validation;
    }

    const request = await axios.get('https://api.eva.pingutil.com/email', {
        params: {email}
    });

    // Validate and store result
    return EvaValidation.create(request.data.data);
}

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
