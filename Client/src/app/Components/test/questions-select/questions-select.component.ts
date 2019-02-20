import { Component, OnInit } from '@angular/core';
import { GetQuestionsService } from '../../../Services/Test/GetQuestions.service';
import Question from 'src/app/Models/Question';

@Component({
  selector: 'app-questions-select',
  templateUrl: './questions-select.component.html',
  styleUrls: ['./questions-select.component.css']
})
export class QuestionsSelectComponent implements OnInit {

  questionsList: Question[] = [];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private questionsService: GetQuestionsService) { }

  ngOnInit() {
    this.questionsService.get()
      .subscribe(data => {
        this.questionsList = data.data[0];
      }, err => alert(err));
  }
}
