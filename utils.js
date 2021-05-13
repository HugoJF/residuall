module.exports = {
    ok(results = []) {
        return {
            status: 'OK',
            code: 200,
            results
        }
    },

    isValidEmail(email) {
        if (typeof email !== 'string') {
            return false;
        }

        // [1 ou mais caracteres] @ [1 ou mais caracteres] [1 das 4 opções] [fim da string]
        return email.match(/.+@.+(.com.br|.com|.gov.br|.org)$/) !== null;
    }
};
