import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Question } from 'src/app/Models/Question';

export interface DialogData {
    question: Question;
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
            width: '250px',
            data: { question: this.question }
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
