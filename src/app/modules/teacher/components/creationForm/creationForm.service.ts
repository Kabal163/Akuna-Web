import {Injectable} from '@angular/core';
import {CreationFormModel} from './creationForm.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CreationFormService {

  constructor(private http: HttpClient){
  }

  createTeacher(teacher: CreationFormModel)
  {
    const url = 'project/teacher/create';
    return this.http.post(url, teacher);
  }
}
