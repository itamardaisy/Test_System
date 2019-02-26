import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { EStatusCode as esc } from '../../Enums/EStatusCodes';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { MatRadioChange } from '@angular/material';
import { EQuestionType as eqt } from '../../Enums/EQuestionType';
import Question from 'src/app/Models/Question';

@Component({
    selector: 'app-edit-question',
    templateUrl: './edit-question.component.html',
    styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
    // Models for binding.
    public selectedOptions = 'Single answer question';
    public question = new Question();
    public answers: Answer[] = new Array();

    // Booleans for the message indications.
    public _textEmpty: boolean;
    public _questionHasNotSaved: boolean;
    public _answersNotEmpty: boolean;
    public _success: boolean;
    public _isSingleChois: boolean;
    public _numOfSelected = 0;

    // view child

    constructor(private questionService: QuestionService) {}

    ngOnInit() {}

    public addQuestion() {
        if (this.answers.length === 0) {
            this._answersNotEmpty = true;
        }
        const numOfQuestions = this.answers.length + 1;
        this.answers.push(new Answer('', false));
    }

    public save() {
        console.log('save button has clicked');
        const observable = this.questionService.saveQuestion(this.question);
        observable.subscribe(response => {
            if (response === esc.success) {
                console.log(response);
                this._success = true;
            } else {
                // TODO
            }
        }, error => {
            console.log(error);
        }, () => {
            console.log('Done');
        });
    }

    public do() {
        alert('has changed');
    }

    public saveAnswers() {
        this.answers.forEach(element => {
            if (element.IsCorrect) {
                alert(element.Text);
            }
        });
    }

    public setNumOfSelected() {
        alert(this._numOfSelected.toString());
        this._numOfSelected++;
        alert(this._numOfSelected.toString());
    }
}
