import {PersonModel} from "./person.model";
import {SecretQuestionModel} from "../security/secretQuestion.model";

export class AdministratorModel extends PersonModel
{
  private _secretQuestion: SecretQuestionModel;
  private _secretAnswer: string;


  get secretQuestion(): SecretQuestionModel {
    return this._secretQuestion;
  }

  set secretQuestion(value: SecretQuestionModel) {
    this._secretQuestion = value;
  }

  get secretAnswer(): string {
    return this._secretAnswer;
  }

  set secretAnswer(value: string) {
    this._secretAnswer = value;
  }
}
