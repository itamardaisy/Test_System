import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { Question } from 'src/app/Models/Question';
import { MatRadioGroup } from '@angular/material';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
    @Input() question: Question;

    answersNotEmpty: boolean;
    textEmpty: boolean;

    @ViewChild('radioAnswer') radioGroup;

    constructor() { }

    ngOnInit() {
        this.question.Answers.push(new Answer('', false));
        this.question.Answers.push(new Answer('', false));
    }

    removeQuestion(index: number) {
        if (this.question.Answers.length > 2) {
            this.question.Answers.splice(index, 1);
        } else {
            return;
        }
    }

    addQuestion() {
        if (this.question.Answers.length === 0) {
            this.answersNotEmpty = true;
        }
        this.question.Answers.push(new Answer('', false));
    }

    onSelectionChange(chossenAnswer) {
        this.question.Answers.forEach(answer => {
            if (answer.Text === chossenAnswer.Text) {
                answer.IsCorrect = true;
            } else {
                answer.IsCorrect = false;
            }
        });
    }

    saveAnswers() {
        this.question.Answers.forEach(answer => {
            if (answer.IsCorrect) {
                alert(answer.Text);
            }
        });
    }
}
