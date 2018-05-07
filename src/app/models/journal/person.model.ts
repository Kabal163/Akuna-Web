import {UserModel} from "../security/user.model";
import {AkunaEntityModel} from "../abstract/akunaEntity.model";

export class PersonModel extends AkunaEntityModel
{
  private _firstName: string;
  private _secondName: string;
  private _middleName: string;
  private _birthday: string;
  private _phoneNumber: string;
  private _user: UserModel;


  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get secondName(): string {
    return this._secondName;
  }

  set secondName(value: string) {
    this._secondName = value;
  }

  get middleName(): string {
    return this._middleName;
  }

  set middleName(value: string) {
    this._middleName = value;
  }

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get user(): UserModel {
    return this._user;
  }

  set user(value: UserModel) {
    this._user = value;
  }
}
