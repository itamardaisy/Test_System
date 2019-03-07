import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetTemplatesService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(env.baseUrl + env.templateUrl);
  }
}

