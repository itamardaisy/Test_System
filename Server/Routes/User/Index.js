const testRouter = require('express').Router();
const sql = require('mssql');
const _ = require('lodash');
const bodyParser = require('body-parser');

const sqlParameter = require('../../Models/SqlParameter');
const repository = require('../../Dal/Repository');


testRouter.get('/getUserTest', (req, res) => {
    console.log("in get catgory")
    //let body = _.pick(req.body(['categoryId']));

    let userTest = [{
        question1: {
            id: 1,
            question: 'question 1',
            answares: [{
                id: 1,
                content: 'answare 1',
                isCorrect: true
            }, {
                id: 2,
                content: 'answare 2',
                isCorrect: false
            }, {
                id: 3,
                content: 'answare 3',
                isCorrect: false
            }, {
                id: 4,
                content: 'answare 4',
                isCorrect: false
            },
            ]
        }, question4: {
            id: 4,
            question: 'question 1',
            answares: [{
                id: 1,
                content: 'answare 1',
                isCorrect: true
            }, {
                id: 2,
                content: 'answare 2',
                isCorrect: false
            }, {
                id: 3,
                content: 'answare 3',
                isCorrect: false
            }, {
                id: 4,
                content: 'answare 4',
                isCorrect: false
            },
            ]
        }, question5: {
            id: 5,
            question: 'question 1',
            answares: [{
                id: 1,
                content: 'answare 1',
                isCorrect: true
            }, {
                id: 2,
                content: 'answare 2',
                isCorrect: false
            }, {
                id: 3,
                content: 'answare 3',
                isCorrect: false
            }, {
                id: 4,
                content: 'answare 4',
                isCorrect: false
            },
            ]
        }, question2: {
            id: 2,
            question: 'question 1',
            answares: [{
                id: 1,
                content: 'answare 1',
                isCorrect: true
            }, {
                id: 2,
                content: 'answare 2',
                isCorrect: false
            }, {
                id: 3,
                content: 'answare 3',
                isCorrect: false
            }, {
                id: 4,
                content: 'answare 4',
                isCorrect: false
            },
            ]
        }, question3: {
            id: 3,
            question: 'question 1',
            answares: [{
                id: 1,
                content: 'answare 1',
                isCorrect: true
            }, {
                id: 2,
                content: 'answare 2',
                isCorrect: false
            }, {
                id: 3,
                content: 'answare 3',
                isCorrect: false
            }, {
                id: 4,
                content: 'answare 4',
                isCorrect: false
            },
            ]
        },
    }]
    res.send(userTest);
});