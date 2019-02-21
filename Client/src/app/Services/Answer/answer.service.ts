import { Injectable } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AnswerService {
    answerList: Answer[];
    constructor(private http: HttpClient) { }

    getAnswers(questionId: number): Observable<Answer[]> {
        // TODO: Change the Url in the env object to the correct url.
        return this.http.get<Answer[]>(env.baseUrl + env.loginUrl + `/?questionId=${questionId}`);
    }

    setAnswers(questionId: number) {
        const observable = this.getAnswers(questionId);
        observable.subscribe(response => {
            response.forEach(element => {
                this.answerList.push(new Answer(element.Text, element.IsCorrect));
            });
        }, error => {
            console.error(error);
        }, () => {
            console.log('Done');
        });
    }
}
