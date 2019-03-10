const express = require('express')
const router = express.Router();
const dbContext = require('../../Dal/Repository');
const sql = require('mssql');
const sqlP = require('../../Models/SqlParameter');
const statusCodes = require('../../Models/ErrorCodesEnum');

router.post('/saveQuestion', (req, res) => {
    console.log(req.body);
    const request = req.body;
    const params = [new sqlP('IsMultiple', sql.Bit, request.IsMultiple),
    new sqlP('Content', sql.NVarChar(2000), request.Content),
    new sqlP('TextBelow', sql.NVarChar(2000), request.TextBelow),
    new sqlP('IsHorizontal', sql.Bit, request.IsHorizontal),
    new sqlP('Tags', sql.NVarChar(100), request.Tags),
    new sqlP('IsActive', sql.Bit, request.IsActive)];
    dbContext.excecuteProcedureDB('spAddNewQuestion', params, data => {
        const questionId = data[0][0].Id;
    });
    req.body.Answers.forEach(answer => {
        console.log('----------- ' + answer.IsCorrect + ' ------------- ' + answer.Text);
        const answersParams = [new sqlP('QuestionId', sql.Int, questionId),
        new sqlP('IsCorrect', sql.Bit, answer.IsCorrect),
        new sqlP('AnswerContent', sql.NVarChar(2000), answer.Text)];
        answersParams.forEach(answer => {
            console.log(answer.paramName + '----------' + answer.sqlType + '----------' + answer.value)
        });
        dbContext.excecuteProcedureDB('spAddAnswer', answersParams, answerData => {
            return res.status(200).send({ status: statusCodes.success });
        });
    });
});

router.get('/getQuestions', (req, res) => {
    dbContext.excecuteQueryDB('SELECT * FROM Question', output => {
        console.log(output);
        return res.status(200).send({ data: output });
    });
});

router.get('/getQuestionAnswers', (req, res) => {
    dbContext.excecuteQueryDB(`SELECT Content FROM Answer WHERE QuestionId = ${req.body.questionId}`, output => {
        console.log(output);
        return res.status(200).send({ data: output });
    })
});
module.exports = router;