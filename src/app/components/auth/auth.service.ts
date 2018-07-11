import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLoginForm, UserRegisterForm} from './auth.model';

@Injectable()
export class AuthService
{
  secretQuestionsUrl: string = "/api/auth/register/secretQuestion";
  registerUrl: string = "/api/auth/register";
  loginUrl: string = "/api/auth/login";

  constructor(private http: HttpClient){}

  getSecretQuestions()
  {
    return this.http.get(this.secretQuestionsUrl);
  }

  register(userRegisterForm: UserRegisterForm)
  {
    return this.http.post(this.registerUrl, userRegisterForm);
  }

  login(userLoginForm: UserLoginForm)
  {
    const headers = new HttpHeaders({"X-Requested-With": "XMLHttpRequest"});
    return this.http.post(this.loginUrl, userLoginForm, {headers: headers});
  }
}
