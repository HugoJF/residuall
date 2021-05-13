const app = require('../index');
const {ok} = require("../utils");
const {LocalValidation} = require("./../models");

app.get('/mail/validation/v1', async function (req, res) {
    const options = {};
    let attributes = req.query.fields;

    // Assure attributes is always an array
    if (!Array.isArray(attributes)) {
        attributes = [attributes].filter(Boolean); // Filter falsy values
    }

    // Only add filter options if a field is defined
    if (attributes.length > 0) {
        options.attributes = attributes;
    }

    const validations = await LocalValidation.findAll(options);

    res.send(ok(validations));
});
