import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdminCreationFormService {

  constructor(private http: HttpClient){}

  getSecreteQuestions()
  {
    const url = 'secreteQuestion/getAll';
    return this.http.get(url);
  }
}
