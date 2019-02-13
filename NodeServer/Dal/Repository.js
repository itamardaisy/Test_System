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
        sqlParams.forEach(p => {
            req.input(p.paramName, p.sqlType, p.value);
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
