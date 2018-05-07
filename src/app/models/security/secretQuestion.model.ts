import {AbstractEntityModel} from "../abstract/abstractEntity.model";

export class SecretQuestionModel extends AbstractEntityModel
{
  private _question: string;

  get question(): string {
    return this._question;
  }

  set question(value: string) {
    this._question = value;
  }
}
