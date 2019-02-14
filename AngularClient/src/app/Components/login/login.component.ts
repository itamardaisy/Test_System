import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/Login/login.service';
import { LoginModel } from 'src/app/Models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public LoginModel = new LoginModel();

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  public onSubmit(): void {
    const observable = this.loginService.login(this.LoginModel);
    observable.subscribe(user => {
      if (user != null) {
        console.log(user);
      } else {
        // Send a message on the login fail.
      }}, error => {
        console.log(error);
      }, () => {
        console.log('Done');
      }
    );
  }
}
