import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { EStatusCode as esc } from '../../Enums/EStatusCodes';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { MatRadioChange } from '@angular/material';
import { EQuestionType as eqt } from '../../Enums/EQuestionType';
import Question from 'src/app/Models/Question';
import { IfStmt } from '@angular/compiler';

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
    public _selectedCounter = 0;

    // Selection options
    public option1 = 'Single answer question';
    public option2 = 'Multiple answers question';

    constructor(private questionService: QuestionService) {}

    ngOnInit() {
        this.question.Answers = new Array<Answer>(2);
        this.question.Content = '';
        this.question.IsActive = true;
        this.question.IsHorizontal = false;
        this.question.IsMultiple = false;
        this.question.Tags = '';
        this.question.TextBelow = '';
    }

    public addQuestion() {
        if (this.answers.length === 0) {
            this._answersNotEmpty = true;
        }
        const numOfQuestions = this.answers.length + 1;
        this.answers.push(new Answer('', false));
    }

    public removeQuestion(index: number) {
        this.answers.splice(index, 1);
    }

    public save() {
        if (!this.checkAnswer()) {
          this._textEmpty = true;
          return;
        } else {
        alert('r');
        this._textEmpty = false;
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
    }

    private checkAnswer() {
      if (this.answers.length < 2) {
        return false;
      }
      this.answers.forEach(answer => {
        if (answer.Text === '') {
          return false;
        }
      });
      return true;
    }

    public saveAnswers() {
        this.answers.forEach(element => {
            if (element.IsCorrect) {
                alert(element.Text);
            }
        });
    }

    public setNumOfSelected() {
        alert(`${this._selectedCounter.toString()} set num of selected`);
        this._selectedCounter++;
        alert(this._selectedCounter.toString());
    }

    public changeState(event) {
        console.log('Change the question Type');
        if (event.target.value === this.option1) {
            this.question.IsMultiple = false;
        } else {
            this.question.IsMultiple = true;
        }
    }

    public changeHorizontal(event) {
        console.log('Change the question Type');
        if (event.target.value === 'Horizontal') {
            this.question.IsHorizontal = true;
        } else {
            this.question.IsHorizontal = false;
        }
    }
}
