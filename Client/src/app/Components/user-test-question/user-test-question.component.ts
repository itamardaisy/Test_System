import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { getSupportedInputTypes } from '@angular/cdk/platform';



@Component({
  selector: 'app-user-test-question',
  templateUrl: './user-test-question.component.html',
  styleUrls: ['./user-test-question.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UserTestQuestionComponent implements OnInit {

  @Input() question: any;
  @Input() index: number;
  isAnswered = false;
 
  constructor() { }

  ngOnInit() {
  }

}
