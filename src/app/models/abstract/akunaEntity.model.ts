import {ProjectModel} from "../journal/project.model";
import {AbstractEntityModel} from "./abstractEntity.model";

export class AkunaEntityModel extends AbstractEntityModel{
  private _project: ProjectModel;

  get project(): ProjectModel {
    return this._project;
  }

  set project(value: ProjectModel) {
    this._project = value;
  }
}
