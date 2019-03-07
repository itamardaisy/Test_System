import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Question } from 'src/app/Models/Question';

export interface DialogData {
    question: Question;
    isHorizontal: boolean;
    isMultiple: boolean;
}

@Component({
    selector: 'app-show-question-details',
    templateUrl: './show-question-details.component.html',
    styleUrls: ['./show-question-details.component.css']
})
export class ShowQuestionDetailsComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<ShowQuestionDetailsComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ngOnInit() {
        alert(this.data.question.Answers[0].IsCorrect);
        this.data.isHorizontal = this.data.question.IsHorizontal;
        this.data.isMultiple = this.data.question.IsMultiple;
    }

    closeDialog() {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'app-show-question',
    templateUrl: './show-question-button.component.html',
    styleUrls: ['./show-question-details.component.css']
})
export class ShowQuestionButtonComponent implements OnInit {
    @Input() question: Question;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {}

    openDialog() {
        const dialogRef = this.dialog.open(ShowQuestionDetailsComponent, {
            width: '600px',
            height: '400px',
            data: { question: this.question, isHorizontal: false, isMultiple: false }
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
