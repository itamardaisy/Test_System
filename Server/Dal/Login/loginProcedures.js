const express = require('express');
const app = express();

const sql = require("mssql");
const config = require('../Config/sqlConfig')

const dbPool = new sql.ConnectionPool(config, err =>{
    if(err){
        console.log(err);
    }
});

function login(email, password){
    const request = dbPool.request(); 
    request.input('Email', sql.VarChar(50), email);
    request.input('Password', sql.VarChar(50), password);

    request.execute('dbo.sp_login', (err, data) =>{
        console.log(err);
        console.log(data);
    });
}
// 098304848-hp