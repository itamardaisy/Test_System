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
                // console.log('data--->'+ data)
                // console.log('err--->'+ err)

                if (err) {
                    // console.log(err);
                    // console.log(transaction);
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
            console.log('ttttttttttttttttttttttttttttttttttttttttt');
            console.log('ttttttttttttttttttttttttttttttttttttttttt');
            console.log('ttttttttttttttttttttttttttttttttttttttttt');
            console.log('ttttttttttttttttttttttttttttttttttttttttt');
            console.log('ttttttttttttttttttttttttttttttttttttttttt');
            console.log('ttttttttttttttttttttttttttttttttttttttttt');
            console.log('ttttttttttttttttttttttttttttttttttttttttt');



            console.log(err);
        }

      
    }



    //This function is to execute a given query.
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




// procedureCreateTest(test, questions) {

//     // var transaction = sql.Transaction(dbPool);

//     // transaction.begin(err => {
//     //     console.log(err)
//     //     let rolledBack = false;

//     //     transaction.on('rollback', aborted => {
//     //         // emited with aborted === true

//     //         rolledBack = true

//     //     })
//     //     new sql.Request(transaction)
//     //         .query('insert into mytable (bitcolumn) values (2)', (err, result) => {
//     //             // insert should fail because of invalid value

//     //             if (err) {
//     //                 if (!rolledBack) {
//     //                     transaction.rollback(err => {
//     //                         // ... error checks
//     //                     })
//     //                 }
//     //             } else {
//     //                 transaction.commit(err => {
//     //                     // ... error checks
//     //                 })
//     //             }
//     //         })
//     // })

//     var req = dbPool.request();
//     const testParams = Object.keys(test);
//     testParams.forEach(p => {
//         req.input(p, test[p]);
//     });
//     req.execute('sp_CreateTest', (err, data) => {
//         if (err) {
//             console.log("error --> " + err);
//         }
//         else {
//             const testId = data.recordset[0].id;
//             console.log(testId);
//             this.procedureAddTestQuestions(testId, questions);
//         }
//     });
// }

// procedureAddTestQuestions(testId, questionsIds) {

//     const tvp = new sql.Table();
//     tvp.columns.add('TestId', sql.UniqueIdentifier);
//     tvp.columns.add('QuestionId', sql.Int);

//     questionsIds.forEach(q => {
//         tvp.rows.add(testId, q);
//     })

//     var req = dbPool.request();
//     req.input('TestQuestions', tvp);
//     req.execute('sp_AddTestQuestions', (err, data) => {
//         if (err) {
//             console.log("error --> " + err);
//         }
//         else {
//             console.log('success!!');
//         }
//     });
// }


// // This function is to execute a given query.
// excecuteQueryDB(query, callBack) {
//     console.log(query);
//     var req = dbPool.request();
//     req.query(query, (err, data) => {
//         if (err) {
//             console.log('error --> ' + err);
//         } else {
//             console.log(data);
//             return callBack(data.recordsets);
//         }
//     });
// }
// }