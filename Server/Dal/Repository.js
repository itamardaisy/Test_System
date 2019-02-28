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

    excecuteProcedureDB3333(test, questions) {
        var req = dbPool.request();
        const testParams = Object.keys(test);
        testParams.forEach(p => {
            req.input(p, test[p]);
        });
        req.execute('sp_CreateTest', (err, data) => {
            if (err) {
                console.log("error --> " + err);
            }
            else {
                const testId = data.recordset[0].id;
                console.log(testId);
                this.excecuteProcedureDBCreateTest(testId, questions);
                
                // return callBack(data.recordsets);
            }
        });
    }

    excecuteProcedureDBCreateTest(testId, questionsIds) {

        const tvp = new sql.Table();

        tvp.columns.add('TestId', sql.UniqueIdentifier);
        tvp.columns.add('QuestionId', sql.Int);

        questionsIds.forEach(q => {
            tvp.rows.add(testId, q);
        })

        //  tvp.rows.add('2E5651E0-F3DA-4CB7-A3DC-88E88EF76E02', q);


        var req = dbPool.request();

        req.input('TestQuestions', tvp);

        req.execute('sp_AddTestQuestions', (err, data) => {
            if (err) {
                console.log("error --> " + err);
            }
            else {
               console.log('success!!');
            }
        });
    }


    // This function is to execute a given query.
    excecuteQueryDB(query, callBack) {
        console.log(query);
        var req = dbPool.request();
        req.query(query, (err, data) => {
            if (err) {
                console.log('error --> ' + err);
            } else {
                console.log(data);
                return callBack(data.recordsets);
            }
        });
    }
}
module.exports = new DBContext();
