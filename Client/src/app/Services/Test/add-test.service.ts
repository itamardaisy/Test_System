import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { TestModel } from 'src/app/Models/TestModel';

@Injectable({
    providedIn: 'root'
})
export class AddTestService {
    constructor(private http: HttpClient) { }

    post(test): Observable<any> {
        return this.http.post(env.baseUrl + env.addTestUrl, test);
    }
}
