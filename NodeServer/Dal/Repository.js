const sql = require('mssql');
const config = require('./../Configuration/sqlConfig.js');

const dbPool = new sql.ConnectionPool(config, err => {
    if (err) {
        console.log(err);
    }
});

class DBContext {
    WriteInDb(procedureName, sqlParams, callback) {
        var req = dbPool.request();
        sqlParams.forEach(e => {
            req.input(e.paramName, e.sqlType, e.value);
        });
        req.execute(procedureName, (err, data) => {
            if (err) {
                console.log("error", err);
            }
            else {
                callback(data.recordset);
            }
        });
    };
}
module.exports = new DBContext();
