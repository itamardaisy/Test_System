const testRouter = require('express').Router();
const sql = require('mssql');
const _ = require('lodash');
const bodyParser = require('body-parser');

const sqlParameter = require('../../Models/SqlParameter');
const repository = require('../../Dal/Repository');


testRouter.get('/getUserTest', (req, res) => {
    console.log("in get catgory")
    //let body = _.pick(req.body(['categoryId']));

    userTest = {
        name: 'js for beginners test',
        questions: [
          {
            id: 1,
            question: 'the first question?',
            isAnswered: true,
            answares: [{
              id: 1,
              content: 'answare of question 1',
              isCorrect: true,
              isSelected: false
            }, {
              id: 2,
              content: 'answare 2',
              isCorrect: false,
              isSelected: true
            }, {
              id: 3,
              content: 'answare 3',
              isCorrect: false,
              isSelected: false
            }, {
              id: 4,
              content: 'answare 4',
              isCorrect: false,
              isSelected: false
            },
            ]
          }, {
            id: 2,
            question: 'the second question?',
            isAnswered: false,
            answares: [{
              id: 1,
              content: 'answare of qouestion 2',
              isCorrect: true,
              isSelected: false
            }, {
              id: 2,
              content: 'answare 2',
              isCorrect: false,
              isSelected: false
            }, {
              id: 3,
              content: 'answare 3',
              isCorrect: false,
              isSelected: false
            }, {
              id: 4,
              content: 'answare 4',
              isCorrect: false,
              isSelected: false
            },
            ]
          }, {
            id: 3,
            question: 'The third question?',
            isAnswered: false,
            answares: [{
              id: 1,
              content: 'answare foor question',
              isCorrect: true,
              isSelected: false
            }, {
              id: 2,
              content: 'answare 2',
              isCorrect: false,
              isSelected: false
            }, {
              id: 3,
              content: 'answare 3',
              isCorrect: false,
              isSelected: false
            }, {
              id: 4,
              content: 'answare 4',
              isCorrect: false,
              isSelected: false
            },
            ]
          }, {
            id: 4,
            question: 'the fourth question?',
            isAnswered: false,
            answares: [{
              id: 1,
              content: 'answare of qouestion 4',
              isCorrect: true,
              isSelected: false
            }, {
              id: 2,
              content: 'answare 2',
              isCorrect: false,
              isSelected: false
            }, {
              id: 3,
              content: 'answare 3',
              isCorrect: false,
              isSelected: false
            }, {
              id: 4,
              content: 'answare 4',
              isCorrect: false,
              isSelected: false
            },
            ]
          }, {
            id: 5,
            question: 'the fifth question?',
            isAnswered: false,
            answares: [{
              id: 1,
              content: 'answare of qouestion 5',
              isCorrect: true,
              isSelected: false
            }, {
              id: 2,
              content: 'answare 2',
              isCorrect: false,
              isSelected: false
            }, {
              id: 3,
              content: 'answare 3',
              isCorrect: false,
              isSelected: false
            }, {
              id: 4,
              content: 'answare 4',
              isCorrect: false,
              isSelected: false
            },
            ]
          },
        ]
      }
    res.send(userTest);
});

testRouter.post('/userTestDone', (req, res) => {
    
});