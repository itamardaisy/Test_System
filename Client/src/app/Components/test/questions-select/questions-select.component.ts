import { Component, OnInit } from '@angular/core';
import { GetQuestionsService } from '../../../Services/Test/get-questions.service';
import { Question } from 'src/app/Models/Question';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions-select',
  templateUrl: './questions-select.component.html',
  styleUrls: ['./questions-select.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class QuestionsSelectComponent implements OnInit {

  questionsList: Question[] = [];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  selected: Question[] = [];
  constructor(private questionsService: GetQuestionsService) { }

  ngOnInit() {
    this.questionsService.get()
      .subscribe(data => {
        this.questionsList = data.data[0];
      }, err => alert(err));
  }
}
