import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/Models/AdminUser';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }
    public register(newAdmin: Admin): Observable<Admin> {
        return this.http.post<Admin>('http://localhost:4201/admin/Register', newAdmin);
    }
}
