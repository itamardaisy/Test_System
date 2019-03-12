import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestModel } from '../../../Models/TestModel';
import { GetTemplatesService } from 'src/app/Services/Test/get-templates.service';
import { AddTestService } from 'src/app/Services/Test/add-test.service';
import { template } from '@angular/core/src/render3';
import { GetQuestionsService } from 'src/app/Services/Test/get-questions.service';

@Component({
    selector: 'app-create-test',
    templateUrl: './create-test.component.html',
    styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
    @ViewChild('successTextArea') successText: ElementRef;
    @ViewChild('failureTextArea') failureText: ElementRef;

    languages = ['english', 'hebrew'];
    selectedQuestinos = [];
    templates: string[] = [];
    certificates: any = ['gold', 'silver', 'copper'];
    testModel = new TestModel();

    constructor(private questionsService: GetQuestionsService
        , private templateService: GetTemplatesService, private testService: AddTestService) { }

    ngOnInit() {
        this.templateService.get()
            .subscribe(data => {
                this.templates = data;
            }, err => alert(err));

        this.questionsService.get()
            .subscribe(data => {
                this.testModel.Questions = data.data[0];
            }, err => alert(err));
    }

    Copy(event, isSuccess) {
        const val = event.currentTarget.value;
        if (isSuccess) {
            this.successText.nativeElement.value += ` ${val}`;
        } else {
            this.failureText.nativeElement.value += ` ${val}`;
        }
    }

    getQuestions(ev) {
        this.selectedQuestinos = ev;
    }

    Submit(testform: TestModel) {
        console.log(testform);
        const test = this.prepareTest(testform);

        this.testService.post(test)
            .subscribe(data => console.log(data)
                , err => console.log(err));
    }

    prepareTest(testform: TestModel) {
        // TODO
        testform.CategoryId = 1;
        const selected = testform.Questions
            .filter(q => q.IsSelected === true)
            .map(q => q.Id);

        delete testform.Questions;
        const test = { testDetails: testform, testQuestions: selected };

        // TODO: min selelcted questions //ngx-toastr?
        return test;
    }
}
