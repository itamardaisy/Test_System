import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';

@Component({
    selector: 'app-edit-question',
    templateUrl: './edit-question.component.html',
    styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
    public options = ['Single answer', 'Two Answers', 'Three answers'];
    public answers: Answer[] = new Array();
    public textEmpty: boolean;
    answersNotEmpty: boolean;

    constructor() {}

    ngOnInit() {}

    addQuestion() {
        if (this.answers.length === 0) {
            this.answersNotEmpty = true;
        }
        console.log(`${this.answers.length} kojewrpjgfiosadngfuiasde`);
        const numOfQuestions = this.answers.length + 1;
        this.answers.push(new Answer(`Question: ${numOfQuestions}`, false));
    }

    changeState(event) {}
}
