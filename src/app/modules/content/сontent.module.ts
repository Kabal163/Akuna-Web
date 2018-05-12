import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TeachersComponent} from './components/teachers/teachers.component';
import {ProfileComponent} from './components/profile/profile.components';
import {RootContentComponent} from './components/rootContent/rootContent.component';
import {AppRoutingModule} from '../routing/routing.module';
import {CreateTeacherComponent} from './components/createTeacher/createTeacher.component';

@NgModule({
  declarations: [TeachersComponent, ProfileComponent, RootContentComponent, CreateTeacherComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule],
  exports: [TeachersComponent, ProfileComponent, RootContentComponent, CreateTeacherComponent],
  providers: []
})
export class ContentModule {

}
