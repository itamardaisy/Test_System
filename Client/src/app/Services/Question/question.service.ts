import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionEdit } from 'src/app/Models/QuestionEdit';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    constructor(private http: HttpClient) { }
    public getQuestionEdit(): Observable<QuestionEdit[]> {
        return this.http.get<QuestionEdit[]>('http://localhost:3000/test/getQuestionByEdit');
    }
}
