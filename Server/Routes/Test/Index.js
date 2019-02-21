const testRouter = require('express').Router();
const sql = require('mssql');
const _ = require('lodash');
const bodyParser = require('body-parser');

const sqlParameter = require('../../Models/SqlParameter');
const repository = require('../../Dal/Repository');
const templates = require('../../Models/PredefinedTemplate');


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
        res.send({ data });
    })
});

testRouter.get('/getPredefinedTemplates', (req, res) => {
    //res.status(200).json({ message: 'Connected!' });
    console.log('lll');
    res.send( templates);
});

module.exports = testRouter;
