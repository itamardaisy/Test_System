import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { StatusCodesEnum as StatusCode } from '../../Enums/StatusCodesEnum';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Question } from 'src/app/Models/Question';
import { FormGroup } from '@angular/forms';
import { Option } from 'src/app/Models/dropdownOptions';

@Component({
    selector: 'app-edit-question',
    templateUrl: './edit-question.component.html',
    styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
    // Models for binding.
    question = new Question();

    // Booleans for the message indications.
    isTextEmpty: boolean;
    isQuestionHasNotSaved: boolean;
    isAnswersNotEmpty: boolean;
    isSuccess: boolean;

    selectedCounter = 0;

    // Selection options
    options: Option[] = [
        {displayText: 'Single answer question' , value: 'Single'},
        {displayText: 'Multiple answers question', value: 'multiple'}
    ];

    constructor(private questionService: QuestionService) { }

    ngOnInit() {}

    public save() {
        debugger;
        if (!this.checkAnswer()) {
            this.isTextEmpty = true;
            return;
        } else {
            this.isTextEmpty = false;
            const observable = this.questionService.saveQuestion(this.question);
            observable.subscribe(response => {
                if (response === StatusCode.success) {
                    console.log(response);
                    this.isSuccess = true;
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
        if (this.question.Answers.length < 2) {
            return false;
        }
        this.question.Answers.forEach(answer => {
            if (answer.Text === '') {
                return false;
            }
        });
        return true;
    }

    public setNumOfSelected() {
        alert(`${this.selectedCounter.toString()} set num of selected`);
        this.selectedCounter++;
        alert(this.selectedCounter.toString());
    }

    public changeState(event) {
        console.log('Change the question Type');
        if (event.target.value === this.options[0].displayText) {
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
