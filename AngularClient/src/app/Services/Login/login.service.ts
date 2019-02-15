import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Models/AdminUser';
import { LoginModel } from 'src/app/Models/LoginModel';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }
    public login(loginModel: LoginModel): Observable<Admin> {
        return this.http.post<Admin>('http://localhost:8080/admin/Login', loginModel);
    }
}
