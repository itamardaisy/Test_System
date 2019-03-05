import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.css']
})
export class UserTestComponent implements OnInit {
  userTest = {
    name: 'js for beginners test',
    questions: [
      {
        id: 1,
        question: 'the first question?',
        answares: [{
          id: 1,
          content: 'answare of question 1',
          isCorrect: true,
          isSelected: false
        }, {
          id: 2,
          content: 'answare 2',
          isCorrect: false,
          isSelected: false
        }, {
          id: 3,
          content: 'answare 3',
          isCorrect: false,
          isSelected: false
        }, {
          id: 4,
          content: 'answare 4',
          isCorrect: false,
          isSelected: false
        },
        ]
      }, {
        id: 2,
        question: 'the second question?',
        answares: [{
          id: 1,
          content: 'answare of qouestion 2',
          isCorrect: true,
          isSelected: false
        }, {
          id: 2,
          content: 'answare 2',
          isCorrect: false,
          isSelected: false
        }, {
          id: 3,
          content: 'answare 3',
          isCorrect: false,
          isSelected: false
        }, {
          id: 4,
          content: 'answare 4',
          isCorrect: false,
          isSelected: false
        },
        ]
      }, {
        id: 3,
        question: 'The third question?',
        answares: [{
          id: 1,
          content: 'answare foor question',
          isCorrect: true,
          isSelected: false
        }, {
          id: 2,
          content: 'answare 2',
          isCorrect: false,
          isSelected: false
        }, {
          id: 3,
          content: 'answare 3',
          isCorrect: false,
          isSelected: false
        }, {
          id: 4,
          content: 'answare 4',
          isCorrect: false,
          isSelected: false
        },
        ]
      }, {
        id: 4,
        question: 'the fourth question?',
        answares: [{
          id: 1,
          content: 'answare of qouestion 4',
          isCorrect: true,
          isSelected: false
        }, {
          id: 2,
          content: 'answare 2',
          isCorrect: false,
          isSelected: false
        }, {
          id: 3,
          content: 'answare 3',
          isCorrect: false,
          isSelected: false
        }, {
          id: 4,
          content: 'answare 4',
          isCorrect: false,
          isSelected: false
        },
        ]
      }, {
        id: 5,
        question: 'the fifth question?',
        answares: [{
          id: 1,
          content: 'answare of qouestion 5',
          isCorrect: true,
          isSelected: false
        }, {
          id: 2,
          content: 'answare 2',
          isCorrect: false,
          isSelected: false
        }, {
          id: 3,
          content: 'answare 3',
          isCorrect: false,
          isSelected: false
        }, {
          id: 4,
          content: 'answare 4',
          isCorrect: false,
          isSelected: false
        },
        ]
      },
    ]
  }

  selectedIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  moveIndex(value) {
    this.selectedIndex += value;
  }

  next(){

  }

  submit(){
    let isValid = true;
    this.userTest.questions.forEach(q => {
      if (q.answares.filter(a => a.isSelected).length === 0){
        isValid = false;
        return;
      }
    })
  }

  goToIndex(value){
    this.selectedIndex  = value;
  }

}
