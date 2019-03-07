import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { QuestionEdit } from 'src/app/Models/QuestionEdit';

@Component({
    selector: 'app-question-manager',
    templateUrl: './question-manager.component.html',
    styleUrls: ['./question-manager.component.css']
})
export class QuestionManagerComponent implements OnInit {
    // This Table columns represent the table columns ids.
    tableColumns: string[] = ['ID', 'Text&Tags', 'LastUpdate', 'QuestionType', 'OfTest', 'Actions'];
    // This question is define the model of the table.
    public questionEdit = new QuestionEdit();
    // The data source of the table.
    dataSource = [];

    constructor(private questionService: QuestionService) { }

    // On initialize the component the dataSource will be filled with the questions.
    ngOnInit() {
        // this.questionService.getQuestionEdit().subscribe((res) => {
        //     this.dataSource = res;
        // });
    }
}
