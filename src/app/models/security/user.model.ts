import {ProjectModel} from "../journal/project.model";
import {AbstractEntityModel} from "../abstract/abstractEntity.model";
import {AkunaEntityModel} from "../abstract/akunaEntity.model";

export class UserModel extends AkunaEntityModel
{
  private _userName: string;
  private _password: string;

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
