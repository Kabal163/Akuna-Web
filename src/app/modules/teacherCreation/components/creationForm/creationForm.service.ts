import {Injectable} from '@angular/core';
import {CreationFormModel} from './creationForm.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CreationFormService {

  constructor(private http: HttpClient){
  }

  createTeacher(teacher: CreationFormModel)
  {
    console.log("firstName = " + teacher.firstName);
    console.log("lastName = " + teacher.lastName);
    console.log("middleName = " + teacher.middleName);
    console.log("email = " + teacher.email);
    console.log("phoneNumber = " + teacher.phoneNumber);
    console.log("city = " + teacher.city);
    console.log("street = " + teacher.street);

    const url = 'project/teacher'
    this.http.post(url, teacher);
  }
}
