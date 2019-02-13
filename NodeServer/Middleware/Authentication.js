var regexp = require('node-regexp')

var inputValidator = (email, password) => {
    if (validateEmail(email) && validatePassword(password)){
        return true;
    } else {
        return false;
    }
};

var emailValidator = (email) => {
    if(validateEmail(email)){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    return re.test(String(password).toLowerCase());
}
module.exports = inputValidator;
module.exports = emailValidator;
