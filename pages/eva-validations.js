const axios = require('axios');
const app = require('../index');
const {ok} = require("../utils");
const {EvaValidation} = require("./../models");

app.get('/mail/validation/v3', async function (req, res) {
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

    const validations = await EvaValidation.findAll(options);

    res.send(ok(validations));
});
