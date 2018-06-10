import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreationFormComponent} from '../teacher/components/creationForm/creationForm.component';
import {AdminCreationFormComponent} from '../administrator/components/creationForm/adminCreationForm.component';

const appRoutes: Routes = [
  {path: '', component: AdminCreationFormComponent},
  {path: 'create-teacher', component: CreationFormComponent},
  {path: 'create-administrator', component: AdminCreationFormComponent}];

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
