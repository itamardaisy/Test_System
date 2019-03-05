import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { QuestionEdit } from 'src/app/Models/QuestionEdit';

export interface QuestionElement {
    Id: string;
    IsMultiple: number;
    Content: number;
    IsHorizontal: string;
    Tags: string;
    Actions: string;
}

@Component({
    selector: 'app-question-manager',
    templateUrl: './question-manager.component.html',
    styleUrls: ['./question-manager.component.css']
})
export class QuestionManagerComponent implements OnInit {
    // This Table columns represent the table columns ids.
    tableColumns: string[] = ['Id', 'IsMultiple', 'Content', 'IsHorizontal', 'Tags', 'Actions'];
    // This question is define the model of the table.
    public questionEdit = new QuestionEdit();
    // The data source of the table.
    dataSource: QuestionElement[] = [];

    constructor(private questionService: QuestionService) { }

    // On initialize the component the dataSource will be filled with the questions.
    ngOnInit() {
        this.fillData();
    }

    fillData() {
        this.questionService.getQuestions().subscribe((res) => {
            this.dataSource = res.data[0];
        });
    }
}
