import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/Models/AdminUser';
import { Observable } from 'rxjs';
import { constantFields } from '../../../../../../Test_System/constantFields.js';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }
    public register(newAdmin: Admin): Observable<Admin> {
        return this.http.post<Admin>(`http://localhost:${constantFields.SERVER_PORT}/admin/register`, newAdmin);
    }
}
