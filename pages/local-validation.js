const app = require('../index');
const {isValidEmail, ok} = require("../utils");
const {LocalValidation} = require("./../models");

async function validation(email) {
    // Check if email is already validated
    const validation = await LocalValidation.findOne({
        where: {email_address: email},
        attributes: ['email_address', 'domain', 'valid_syntax'],
    });

    if (validation) {
        return validation;
    }

    // Validate and store result
    return await LocalValidation.create({
        'email_address': email,
        'domain': 'mail',
        'valid_syntax': isValidEmail(email),
    });
}

app.post('/mail/validation/v1', async function (req, res) {
    let emails = req.body.email_address;

    if (!Array.isArray(emails)) {
        emails = [emails];
    }

    const requests = emails.map(validation);

    res.send(ok(
        await Promise.all(requests)
    ));
});
