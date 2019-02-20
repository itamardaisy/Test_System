const express = require('express');
const testRouter = require('express').Router();
const _ = require('lodash');
const bodyParser = require('body-parser');

const sql = require('mssql');
const sqlParameter = require('../../Models/SqlParameter');
const repository = require('../../Dal/Repository');


testRouter.get('/getTestsByCategory', (req, res) => {
    console.log("in get catgory")
     //let body = _.pick(req.body(['categoryId']));
    let body = 1;
    let p = [new sqlParameter('categoryId', sql.Int, body)];
    repository.excecuteProcedureDB('sp_GetTestsByCategory', p, data => {
        console.log(data);
        res.send({ data });
    });
});

testRouter.get('/getQuestionsByCategory', (req, res) => {
    let body = 1;
    let p = [new sqlParameter('CategoryId', sql.Int, body)];
    repository.excecuteProcedureDB('sp_GetQuestionsByCategory', p, data => {
        res.send({data});
    })
});
module.exports = testRouter;
