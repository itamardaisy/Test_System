import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Models/AdminUser';
import { RegisterService } from 'src/app/Services/Register/register.service';
import { EStatusCode as esc } from '../../Enums/EStatusCodes';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public newAdmin = new Admin();
    public isUsernameExist: boolean;
    public isEmailExist: boolean;
    constructor(
        private registerService: RegisterService,
        private route: Router,
        private activatedRoute: ActivatedRoute) {}

    ngOnInit() { }

    onSubmit() {
        const observable = this.registerService.register(this.newAdmin);
        console.log(this.newAdmin.Email);
        observable.subscribe(response => {
            if (response === esc.usernameExist) {
                this.isUsernameExist = true;
            } else if (response === esc.emailExist) {
                this.isEmailExist = true;
            } else {
                console.log(response);
                const admin = new Admin().Username = response;
                this.route.navigate(['/Login']);
            }
        }, error => {
            console.log(error);
        }, () => {
            console.log('Done');
        });
    }
}
