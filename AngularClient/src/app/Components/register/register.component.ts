import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Models/AdminUser';
import { RegisterService } from 'src/app/Services/Register/register.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public newAdmin = new Admin();
    constructor(private registerService: RegisterService) { }
    ngOnInit() { }

    onSubmit() {
        const observable = this.registerService.register(this.newAdmin);
        console.log(this.newAdmin.Email);
        observable.subscribe(admin => {
            if (admin != null) {
                console.log(admin);
            } else {
                console.log('Some of the register process went wrong.');
            }
        }, error => {
            console.log(error);
        }, () => {
            console.log('Done');
        });
    }
}
