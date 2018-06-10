import {Component} from '@angular/core';
import {AdminCreationFormService} from './adminCreationForm.service';
import {AdminCreationFormModel, SecretQuestion, SecretQuestions} from './adminCreationForm.model';

@Component({
  selector: "create-administrator",
  templateUrl: "adminCreationForm.component.html"
})
export class AdminCreationFormComponent
{
  secretQuestions: SecretQuestions;
  administrator = new AdminCreationFormModel();

  constructor(private creationService: AdminCreationFormService)
  {
    this.init();
  }

  init()
  {
    this.creationService.getSecreteQuestions().subscribe((question: SecretQuestions) => this.secretQuestions = question);
  }

  getSecretQuestions(): SecretQuestions
  {
    return this.secretQuestions;
  }
}
