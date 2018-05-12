import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from '../content/components/profile/profile.components';
import {TeachersComponent} from '../content/components/teachers/teachers.component';
import {NgModule} from '@angular/core';
import {CreateTeacherComponent} from '../content/components/createTeacher/createTeacher.component';

const appRoutes: Routes = [
  {path: 'teachers', component: TeachersComponent},
  {path: '', component: ProfileComponent},
  {path: 'create-teacher', component: CreateTeacherComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
