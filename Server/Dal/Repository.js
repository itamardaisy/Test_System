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
            console.log(p.paramName);
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

     procedureCreateTest(test, questions) {
        var transaction = new sql.Transaction(dbPool);
         transaction.begin(err => {
            if (err) {
                console.log(err);
                return
            }
            var req = dbPool.request(transaction);

            const testParams = Object.keys(test);
            testParams.forEach(p => req.input(p, test[p]));
            req.execute('sp_CreateTest',  (err, data) => {
                if (err) {
                    transaction.rollback();
                    console.log("error --> " + err);
                }
                else {
                    const testId = data.recordset[0].id;
                    console.log(testId);
                      this.procedureAddTestQuestions(testId, questions, transaction);
                }
            });
        })
        transaction.on('commit', data => console.log('commit'));
        transaction.on('rollback', data => {  console.log('rollback')});
        console.log('tran over')
    }

     procedureAddTestQuestions(testId, questionsIds, transaction) {
        try {
            const tvp = new sql.Table();
            tvp.columns.add('TestId', sql.UniqueIdentifier);
            tvp.columns.add('QuestionId', sql.Int);

            questionsIds.forEach(q => {
                tvp.rows.add(testId, q);
            })

            let req = dbPool.request();

            req.input('TestQuestions', tvp);
            console.log('d')
             req.execute('sp_AddTestQuestions', (err, data) => {
                if (err) {
                    transaction.rollback();
                    return
                }
                else {
                    console.log('in commit');
                    transaction.commit(data => console.log('success!!'))
                }
            });
        } 
        catch(err) {
            transaction.rollback();
            console.log(err);
        }
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