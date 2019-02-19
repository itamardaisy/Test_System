import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment as env } from '../../../environments/environment';
import Question from 'src/app/Models/Question';


@Injectable({
    providedIn: 'root'
})
export class GetQuestionsService {
    questions: Question[] = [];

    constructor(private http: HttpClient) {

    }

    get(): Observable<any> {
        return this.http.get(env.baseUrl + env.questionUrl);
    }
}
