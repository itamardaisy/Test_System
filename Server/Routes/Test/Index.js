const express = require('express');
const testRouter = require('express').Router();
const _ = require('lodash');
const bodyParser = require('body-parser');

const sql = require('mssql');
const sqlParameter = require('./../../Models/sqlParameter');
const repository = require('../../Dal/Repository');


testRouter.get('/getTestsByCategory', (req, res) => {
    console.log("in get catgory")
    // let body = _.pick(req.body(['categoryId']));
    let body = 1;
    let p = [new sqlParameter.SqlParmaeter('categoryId', sql.Int, body)];
    repository.WriteInDb('sp_GetTestsByCategory', p, data => {
        console.log(data);
        res.send({ data });
    });
});

testRouter.get('/getQuestionsByCaegory', (req, res) => {
    let body = 1;
    let p = [new sqlParameter.SqlParmaeter('CategoryId', sql.Int, body)];
    repository.WriteInDb('sp_GetQuestionsByCategory', p, data => {
        res.send({data});
    })
});

module.exports = testRouter;







