import {Component} from '@angular/core';
import {UserLoginForm, UserRegisterForm, SecretQuestion} from './auth.model';
import {AuthService} from './auth.service';

@Component({
  selector: "login-page",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
  principle: string;
  credential: string;

  userLoginForm: UserLoginForm = new UserLoginForm();
  userRegisterForm: UserRegisterForm = new UserRegisterForm();
  secretQuestions: SecretQuestion[];

  rememberMe: boolean;
  loginAction: boolean;
  differentPasswords: boolean;

  constructor(private authService: AuthService)
  {
    this.principle = localStorage.getItem("login");
    this.credential = localStorage.getItem("password");
    this.loginAction = true;

    this.authService.getSecretQuestions().subscribe((data: SecretQuestion[]) => this.secretQuestions = data);
  }

  register()
  {
    if (this.userRegisterForm.confirmPassword != this.userRegisterForm.password)
    {
      this.differentPasswords = true;
    }
    else
    {
      this.differentPasswords = false;
      console.log(this.userRegisterForm);
      this.authService.register(this.userRegisterForm).subscribe(data => console.log(data));
    }
  }

  login()
  {
    if (this.rememberMe && this.userLoginForm.principals && this.userLoginForm.credentials)
    {
      localStorage.setItem("login", this.userLoginForm.principals);
      localStorage.setItem("password", this.userLoginForm.credentials);
    }

    this.authService.login(this.userLoginForm).subscribe(data => console.log(data));
  }
}
