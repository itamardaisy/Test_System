const sql = require('mssql');
const config = require('./../Configuration/sqlConfig.js');

const dbPool = new sql.ConnectionPool(config, err => {
    if (err) {
        console.log(err);
    }
});

class DBContext {
    excecuteProcedureDB(procedureName, sqlParams, callBack) {
        console.log('Hello from dbContex');
        var req = dbPool.request();
        sqlParams.forEach(p => {
            req.input(p.paramName, p.sqlType, p.value);
        });
        req.execute(procedureName, (err, data) => {
            if (err) {
                console.log("error --> ", err);
            }
            else {
                return callBack(data.recordsets);
            }
        });
    }

    excecuteQueryDB(query, sqlParams, callBack) {
        
    }
}
module.exports = new DBContext();
