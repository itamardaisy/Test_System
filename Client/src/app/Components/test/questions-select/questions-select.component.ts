import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { GetQuestionsService } from '../../../Services/Test/get-questions.service';
import { Question } from 'src/app/Models/Question';

import { ControlContainer, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { getSupportedInputTypes } from '@angular/cdk/platform';

@Component({
  selector: 'app-questions-select',
  templateUrl: './questions-select.component.html',
  styleUrls: ['./questions-select.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class QuestionsSelectComponent implements OnInit {
  questionsList: MatTableDataSource<Question>;
  displayedColumns: string[] = ['Content', 'Id', 'Show'];
  
  @Output() selectedQuestions = new EventEmitter();
  @Input() set questions(value: Question[]) {
    if (value && value.length > 0) {
      this.questionsList = new MatTableDataSource(value);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.questionsList.filter = filterValue.trim().toLowerCase();
  }

  onSelect(question: Question) {
    console.log(question);
    question.IsSelected = !question.IsSelected;

  }
}



   // this.questionsService.get()
  //   .subscribe(data => {
    //     this.questionsList = new MatTableDataSource(data.data[0]);
    //   }, err => alert(err));

   // test(event) {
  //   console.log(event);
  // }


  // onSubmit() {
  //   let questionsId = this.questionsList.data
  //     .filter(q => q.IsSelected)
  //     .map(qu => qu.Id);
  //   this.selectedQuestions.emit(questionsId);
  // }
