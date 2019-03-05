import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionEdit } from 'src/app/Models/QuestionEdit';
import { Question } from 'src/app/Models/Question';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    constructor(private http: HttpClient) { }

    public getQuestions(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/question/getQuestions');
    }

    public saveQuestion(question: Question): Observable<any> {
        return this.http.post<any>('http://localhost:3000/question/saveQuestion', question);
    }
}
