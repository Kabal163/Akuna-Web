import {PersonModel} from "./person.model";
import {SectionModel} from "../sections/section.model";
import {GroupModel} from "../sections/group.model";

export class TeacherModel extends PersonModel
{
  private sections: SectionModel;
  private groups: GroupModel;
}
