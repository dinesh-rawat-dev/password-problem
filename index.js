/**
 * Checks the strength of password
 * @param password
 * Return {boolean}
 */
function checkPassword(password) {
    password = password.replace(/\s/g, '')
    for (let chunk = 1; chunk <= password.length / 2; chunk++) {
        let init = password.substr(0, chunk);
        for (let index = chunk; index < password.length; index = index + chunk) {
            if (init === password.substr(index, chunk)) {
                return false;
            }
            init = password.substr(index, chunk);
        }
    }
    return true;
}

password('cucu')
