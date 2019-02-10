import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminUser } from 'src/app/Models/AdminUser';
import { LoginModel } from 'src/app/Models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient  ) { }
  public login(loginModel: LoginModel): Observable<AdminUser> {
    return this.http.post<AdminUser>('http://localhost:8080/Login', loginModel);
  }
}
