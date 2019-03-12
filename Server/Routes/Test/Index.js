const testRouter = require('express').Router();
const sql = require('mssql');
const _ = require('lodash');
const bodyParser = require('body-parser');

const sqlParameter = require('../../Models/SqlParameter');
const repository = require('../../Dal/Repository');
const templates = require('../../Models/PredefinedTemplate');


testRouter.get('/getTestsByCategory', (req, res) => {
    console.log("in get catgory")
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
        res.send({ data });
    })
});

testRouter.get('/getPredefinedTemplates', (req, res) => {
    console.log('lll');
    res.send(templates);
});

testRouter.post('/addTest', (req, res) => {
    let test = req.body.testDetails;
    let questions = req.body.testQuestions;

    repository.procedureCreateTest(test, questions);
    console.log(test, questions);
})

testRouter.get('/t', (req, res) => {
    console.log('in test' + new Date());
});

module.exports = testRouter;
