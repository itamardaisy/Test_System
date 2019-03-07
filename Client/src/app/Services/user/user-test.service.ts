import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { environment as env} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserTestService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(env.baseUrl + env.getUserTestUrl);
  }

  post(test): Observable<any>{
    return this.http.post(env.baseUrl + env.userTestDoneUrl, test);
  }
}
