import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { UserTestService } from 'src/app/Services/user/user-test.service';

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
                isAnswered: true,
                answares: [{
                    id: 1,
                    content: 'answare of question 1',
                    isCorrect: true,
                    isSelected: false
                }, {
                    id: 2,
                    content: 'answare 2',
                    isCorrect: false,
                    isSelected: true
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
                isAnswered: false,
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
                isAnswered: false,
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
                isAnswered: false,
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
                isAnswered: false,
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
    isValid = false;

    constructor(private userTestService: UserTestService) { }

    ngOnInit() {
        // this.userTestService.get()
        // .subscribe
    }

    moveIndex(value) {
        if (this.userTest.questions[this.selectedIndex].answares
            .filter(a => a.isSelected === true).length > 0) {
            this.userTest.questions[this.selectedIndex].isAnswered = true;
        } else {
            this.userTest.questions[this.selectedIndex].isAnswered = false;
        }

        console.log(this.userTest.questions[this.selectedIndex], this.userTest.questions[this.selectedIndex].isAnswered);

        this.selectedIndex += value;
    }

    next() {

    }

    submitCheck(): boolean {
        let isValid = true;
        this.userTest.questions.forEach(q => {
            if (q.answares.filter(a => a.isSelected).length === 0) {
                isValid = false;
                console.log('fill all questions')
                return;
            }
        });
        return isValid;
    }

    submit() {
        if (!this.submitCheck()) {
            return;
        }

        let test = {
            testId: 1,
            userId: 1,
            answares: this.userTest.questions.map(question => {
                return {
                    questionId: question.id,
                    answeresIds: question.answares.filter(a => a.isSelected).map(a => a.id)
                };
            })
        };
        console.log(test);
    }

    goToIndex(value) {
        this.selectedIndex = value;
    }
}
