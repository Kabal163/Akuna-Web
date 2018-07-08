import {Component} from '@angular/core';
import {UserLoginForm} from './login.model';

@Component({
  selector: "login-page",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  principle: string;
  credential: string;


  constructor() {
    this.principle = localStorage.getItem("login");
    this.credential = localStorage.getItem("password");
  }

  userLoginForm: UserLoginForm = new UserLoginForm();
  rememberMe: boolean;

  login()
  {
    if (this.rememberMe && this.userLoginForm.principals && this.userLoginForm.credentials)
    {
      console.log("good" + ", " + this.userLoginForm.principals + ", " + this.userLoginForm.credentials);
      localStorage.setItem("login", this.userLoginForm.principals);
      localStorage.setItem("password", this.userLoginForm.credentials);
    }
  }
}
