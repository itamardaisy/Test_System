import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';

import { environment } from '../../../environments/environment';
import Question from 'src/app/Models/Question';


@Injectable()
export default class QuestionsService {
    questions: Question[] = [];

    constructor(private http: HttpClient) {

    }
    
    get(): Observable<any> {
        return this.http.get(environment.baseUrl + environment.questionUrl);
    }
}