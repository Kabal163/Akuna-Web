import {Component} from '@angular/core';
import {CreationFormService} from './creationForm.service';
import {TeacherModel} from '../../../../models/journal/teacher.model';
import {CreationFormModel} from './creationForm.model';

@Component({
  selector: "create-teacher",
  templateUrl: "./creationForm.component.html",
  styleUrls: ["./creationForm.component.css"]
})
export class CreationFormComponent {

  teacher = new CreationFormModel();

  constructor(
    private creationService: CreationFormService
  ){}

  createTeacher()
  {
    this.creationService.createTeacher(this.teacher).subscribe((data: String) => console.log(data))
  }
}
