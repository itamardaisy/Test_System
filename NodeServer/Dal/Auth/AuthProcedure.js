const sql = require("mssql");
const config = require('../../Configuration/sqlConfig');

const dbPool = new sql.ConnectionPool(config, err => {
    if (err) {
        console.log(err);
    }
});

// Login function
exports.login = (email, password) => {
    const request = dbPool.request();
    request.input('Email', sql.VarChar(50), email);
    request.input('Password', sql.VarChar(50), password);
    console.log('Before the execute');
    request.execute('sp_login', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data.recordsets);
            return data;
        }
    });
}

// Logout function
exports.logout = (email) => {
    const request = dbPool.request();
    request.input('Email', sql.VarChar(50), email);
    request.execute('sp_logout', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data.recordsets);
        }
    });
}
