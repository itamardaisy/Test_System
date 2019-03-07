import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  public options = ['Single answer', 'Two Answers', 'Three answers'];
  public answers: Answer[];
  constructor() {}

  ngOnInit() {
  }

  addQuestion() {

  }
}
