import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GetQuestionsService } from '../../../Services/Test/get-questions.service';
import Question from 'src/app/Models/Question';
import { ControlContainer, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-questions-select',
  templateUrl: './questions-select.component.html',
  styleUrls: ['./questions-select.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class QuestionsSelectComponent implements OnInit {

  // @ViewChild('btn')

  isSelected = false;
  questionsList: MatTableDataSource<Question>;
  displayedColumns: string[] = ['Content', 'Id', 'Show'];
  selected: Question[] = [];//
  constructor(private questionsService: GetQuestionsService) { }

  ngOnInit() {
    this.questionsService.get()
      .subscribe(data => {
        this.questionsList = new MatTableDataSource(data.data[0]);
      }, err => alert(err));
  }

  applyFilter(filterValue: string) {
    this.questionsList.filter = filterValue.trim().toLowerCase();

  }

  test(event) {
    console.log(event);
  }

  onSelect(question: Question) {
    console.log(question);
    question.IsSelected = !question.IsSelected;
  }

  onSubmit(){
    return this.questionsList.data.filter(q=>q.IsSelected);
  }
}

