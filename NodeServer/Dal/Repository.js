const sql = require('mssql');
const config = require('./../Configuration/sqlConfig.js');

const dbPool = new sql.ConnectionPool(config, err => {
    if (err) {
        console.log(err);
    }
});

class DBContext {

    // This function is to execute a given procedure. 
    excecuteProcedureDB(procedureName, sqlParams, callBack) {
        var req = dbPool.request();
        sqlParams.forEach(p => {
            req.input(p.paramName, p.sqlType, p.value);
        });
        req.execute(procedureName, (err, data) => {
            if (err) {
                console.log("error --> " + err);
            }
            else {
                return callBack(data.recordsets);
            }
        });
    }

    // This function is to execute a given query.
    excecuteQueryDB(query, sqlParams, callBack) {
        var req = dbPool.request();
        sqlParams.forEach(p => {
            req.input(p.paramName, p.sqlType, p.value);
        });
        req.query(query, (err, data) => {
            if (err) {
                console.log('error --> ' + err);
            } else {
                return callBack(data.recordsets);
            }
        });
    }
}
module.exports = new DBContext();
