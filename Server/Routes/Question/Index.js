const express = require('express')
const router = express.Router();
const dbContext = require('../../Dal/Repository');
const sql = require('mssql');
const sqlP = require('../../Models/SqlParameter');

router.post('/saveQuestion', (req, res) => {
    console.log(req);
    // TODO: create a validation.
    const { isMultiple, content, textBelow, isHorizontal, tags, isActive } = req.body;
    const params = [new sqlP('IsMultiple', sql.Bit, isMultiple),
                    new sqlP('Content', sql.NVarChar(2000), content),
                    new sqlP('Text below', sql.NVarChar(2000), textBelow),
                    new sqlP('IsHorizontal', sql.Bit, isHorizontal),
                    new sqlP('Tags', sql.NVarChar(100), tags),
                    new sqlP('IsActive', sql.Bit, isActive)];
    dbContext.excecuteProcedureDB('spAddNewQuestion', params, data => {
        console.log(data);
    });
});

function addAnswers(req) {
    const {} =  req.body;
}
module.exports = router;