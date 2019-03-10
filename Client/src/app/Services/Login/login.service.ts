import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Models/AdminUser';
import { LoginModel } from 'src/app/Models/LoginModel';
import { environment as env } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }
    public login(loginModel: LoginModel): Observable<any> {
        return this.http.post<any>(`${env.baseUrl + env.loginUrl}`, loginModel);
    }
}
