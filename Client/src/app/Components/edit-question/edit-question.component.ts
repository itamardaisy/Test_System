import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  options = ['Single answer', 'Two Answers', 'Three answers'];
  answers: Answer[];
  answer: Answer;
  constructor() {}

  ngOnInit() {
    this.answer = new Answer('', false);
  }

  addQuestion() {

  }

  changeState(event) {
    this.answer.IsCorrect = event.target.checked;
  }
}
