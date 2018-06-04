import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreationFormComponent} from '../teacherCreation/components/creationForm/creationForm.component';

const appRoutes: Routes = [
  {path: '', component: CreationFormComponent},
  {path: 'create-teacher', component: CreationFormComponent}];

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
